package com.thermofisher.flowci.event;

import android.app.Dialog;
import android.view.View;
import android.widget.EditText;

import java.io.File;

public class CreateFolderClickListener implements View.OnClickListener {

    private Dialog dialog;
    private EditText editText;

    private String rootDir;

    public CreateFolderClickListener(Dialog dialog, EditText editText, String rootDir) {
        this.dialog = dialog;
        this.editText = editText;
        this.rootDir = rootDir;
    }

    @Override
    public void onClick(View v) {
        File file = new File(rootDir, editText.getText().toString());

        if (file.mkdir()) {
            dialog.dismiss();
        }
    }

}
