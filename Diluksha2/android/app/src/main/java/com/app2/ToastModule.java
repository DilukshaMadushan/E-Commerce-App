package com.app2;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;


import android.widget.Toast;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

//import lk.payhere.androidsdk.Activity;
import lk.payhere.androidsdk.PHConfigs;
import lk.payhere.androidsdk.PHResponse;
//import lk.payhere.androidsdk.StatusResponse;
import lk.payhere.androidsdk.PHConstants;
import lk.payhere.androidsdk.PHMainActivity;
import lk.payhere.androidsdk.model.InitRequest;
import lk.payhere.androidsdk.model.Item;

import android.app.Activity;
import com.facebook.react.bridge.Promise;


public class ToastModule extends ReactContextBaseJavaModule{
  private static ReactApplicationContext reactContext;

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  private final static int PAYHERE_REQUEST = 11010;
  private final InitRequest req;

  private Promise payherePromise;

  private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {

    @Override
    public void onActivityResult(Activity Activity, int requestCode, int resultCode, Intent data) {
      super.onActivityResult(requestCode, resultCode, data);
      if (requestCode == PAYHERE_REQUEST && data != null && data.hasExtra(PHConstants.INTENT_EXTRA_RESULT)) {
          PHResponse response = (PHResponse) data.getSerializableExtra(PHConstants.INTENT_EXTRA_RESULT);
          if (resultCode == Activity.RESULT_OK) {
              String msg="";
              if (response != null){
                  if (response.isSuccess()){
                    msg = "Activity result:" + response.getData().toString();
                    payherePromise.resolve("2"); 
                  }
                      
                  else{
                    msg = "Result:" + response.toString();
                    payherePromise.resolve("1"); 
                  }
                      
              }else{
                msg = "Result: no response";
                payherePromise.resolve("-1"); 
              }
              
              // Log.d(TAG, msg);
              // textView.setText(msg);
          } else if (resultCode == Activity.RESULT_CANCELED) {
              if (response != null){
                    //textView.setText(response.toString());
                    payherePromise.resolve("0");
              }
              else{
                payherePromise.resolve("0");
                  //textView.setText("User canceled the request");
              }      
          } else {
            payherePromise.resolve("-1");
          }
      }else{
        
        if (data != null){
          payherePromise.resolve("2");
        }else{
          payherePromise.resolve("3");
        }
        
      }
    }
  };

  ToastModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
    reactContext.addActivityEventListener(mActivityEventListener);
    req = new InitRequest();
  }

//   @ReactMethod
//   public void show(String message, int duration) {
//     Toast.makeText(getReactApplicationContext(), message, duration).show();
//   }

  @ReactMethod
  public void payOnce(int amount,
                      String description,
                      String firstName,
                      String lastName,
                      String email,
                      String phone,
                      String address,
                      String city,
                      final Promise promise) {

    payherePromise = promise;
    
    req.setMerchantId("1215323");       // Your Merchant PayHere ID
    req.setMerchantSecret("4JJg5r7Itec8m4NzsnJy3K4vQh6VJVR5y4vTGxJRXM7b"); // Your Merchant secret (Add your app at Settings > Domains & Credentials, to get this))
    req.setCurrency("LKR");             // Currency code LKR/USD/GBP/EUR/AUD
    req.setAmount(amount);             // Final Amount to be charged
    req.setOrderId("230000123");        // Unique Reference ID
    req.setItemsDescription(description);  // Item description title 
    req.setCustom1("This is the custom message 1");
    req.setCustom2("This is the custom message 2");
    req.getCustomer().setFirstName(firstName);
    req.getCustomer().setLastName(lastName);
    req.getCustomer().setEmail(email);
    req.getCustomer().setPhone(phone);
    req.getCustomer().getAddress().setAddress(address);
    req.getCustomer().getAddress().setCity(city);
    req.getCustomer().getAddress().setCountry("Sri Lanka");
    
    //Optional Params
    // req.getCustomer().getDeliveryAddress().setAddress("No.2, Kandy Road");
    // req.getCustomer().getDeliveryAddress().setCity("Kadawatha");
    // req.getCustomer().getDeliveryAddress().setCountry("Sri Lanka");
    // req.getItems().add(new Item(null, "Door bell wireless", 1, 500));
    
    Intent intent = new Intent(reactContext, PHMainActivity.class);
    intent.putExtra(PHConstants.INTENT_EXTRA_DATA, req);
    PHConfigs.setBaseUrl(PHConfigs.SANDBOX_URL);
    reactContext.startActivityForResult(intent, PAYHERE_REQUEST, Bundle.EMPTY); //unique request ID like private final static int PAYHERE_REQUEST = 11010;
    
    //successCallback.invoke("Done");
  }
  
  @Override
  public String getName() {
    return "Toast";
  }
  

}