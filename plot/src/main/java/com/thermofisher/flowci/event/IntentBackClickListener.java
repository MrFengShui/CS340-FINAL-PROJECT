package com.thermofisher.flowci.event;

import android.app.Activity;
import android.content.Intent;
import android.view.View;

public class IntentBackClickListener implements View.OnClickListener {

    private Class<?> target;
    private Activity context;
    private Intent intent;

    public IntentBackClickListener(Activity context, Class<?> target) {
        this.context = context;
        this.target = target;
    }

    @Override
    public void onClick(View v) {
        if (intent == null) {
            intent = context.getIntent();
        }

        intent.setClass(context, target);
        context.startActivity(intent);
    }

}
