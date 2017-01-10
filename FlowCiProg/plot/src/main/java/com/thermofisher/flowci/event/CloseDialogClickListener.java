package com.thermofisher.flowci.event;

import android.app.Dialog;
import android.view.View;

/**
 * Created by MrFengShui on 2017-01-09.
 */

public class CloseDialogClickListener implements View.OnClickListener {

    private Dialog dialog;

    public CloseDialogClickListener(Dialog dialog) {
        this.dialog = dialog;
    }

    @Override
    public void onClick(View v) {
        dialog.dismiss();
    }

}
