package com.app2;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;


import android.widget.Toast;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;


import lk.payhere.androidsdk.PHConfigs;
import lk.payhere.androidsdk.PHConstants;
import lk.payhere.androidsdk.PHMainActivity;
import lk.payhere.androidsdk.model.InitRequest;
import lk.payhere.androidsdk.model.Item;

public class ToastModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  private final static int PAYHERE_REQUEST = 11010;
  private final InitRequest req;

  ToastModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
    //reactContext.addActivityEventListener((ActivityEventListener) this);
    req = new InitRequest();
  }

//   @ReactMethod
//   public void show(String message, int duration) {
//     Toast.makeText(getReactApplicationContext(), message, duration).show();
//   }

  @ReactMethod
  public void payOnce(int amount, Callback successCallback) {
    
    req.setMerchantId("213083");       // Your Merchant PayHere ID
    req.setMerchantSecret("8b2fc45d311d61630014693952f8d059"); // Your Merchant secret (Add your app at Settings > Domains & Credentials, to get this))
    req.setCurrency("LKR");             // Currency code LKR/USD/GBP/EUR/AUD
    req.setAmount(amount);             // Final Amount to be charged
    req.setOrderId("230000123");        // Unique Reference ID
    req.setItemsDescription("Door bell wireless");  // Item description title 
    req.setCustom1("This is the custom message 1");
    req.setCustom2("This is the custom message 2");
    req.getCustomer().setFirstName("Saman");
    req.getCustomer().setLastName("Perera");
    req.getCustomer().setEmail("samanp@gmail.com");
    req.getCustomer().setPhone("+94771234567");
    req.getCustomer().getAddress().setAddress("No.1, Galle Road");
    req.getCustomer().getAddress().setCity("Colombo");
    req.getCustomer().getAddress().setCountry("Sri Lanka");
    
    //Optional Params
    req.getCustomer().getDeliveryAddress().setAddress("No.2, Kandy Road");
    req.getCustomer().getDeliveryAddress().setCity("Kadawatha");
    req.getCustomer().getDeliveryAddress().setCountry("Sri Lanka");
    req.getItems().add(new Item(null, "Door bell wireless", 1, 1000.0));
    
    Intent intent = new Intent(reactContext, PHMainActivity.class);
    intent.putExtra(PHConstants.INTENT_EXTRA_DATA, req);
    PHConfigs.setBaseUrl(PHConfigs.SANDBOX_URL);
    reactContext.startActivityForResult(intent, PAYHERE_REQUEST, Bundle.EMPTY); //unique request ID like private final static int PAYHERE_REQUEST = 11010;

    successCallback.invoke("Done");
  }
  
  @Override
  public String getName() {
    return "Toast";
  }
}