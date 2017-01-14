package com.thermofisher.flowci;

import android.annotation.SuppressLint;
import android.app.Dialog;
import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.thermofisher.flowci.event.CloseDialogClickListener;
import com.thermofisher.flowci.event.CreateFolderClickListener;
import com.thermofisher.flowci.tool.DirectoryFactory;

import java.io.File;

public class CreateFolderDialog extends Dialog {

    private Context context;
    private EditText editText;
    private View.OnClickListener clickListener;

    public CreateFolderDialog(Context context) {
        super(context);
        this.context = context;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        @SuppressLint("InflateParams")
        View view = inflater.inflate(R.layout.dialog_create_folder, null);
        setContentView(view);
        setTitle("Create Folder");
        initContent();
    }

    private void initContent() {
        DirectoryFactory directoryFactory = DirectoryFactory.getDirectoryInstance(context);
        File file = new File(directoryFactory.getHomeDirectory() + File.separator + DirectoryFactory.NEW_FOLDER);
        int count = 1;
        String folder = DirectoryFactory.NEW_FOLDER;

        while (file.exists()) {
            folder = DirectoryFactory.NEW_FOLDER + " " + count ++;
            file = new File(directoryFactory.getHomeDirectory() + File.separator + folder);
        }

        editText = (EditText) findViewById(R.id.flowci_create_folder_edittext);
        editText.setText(folder);
    }

    public void handleCreateEvent(final String rootDir) {
        Button createButton = (Button) findViewById(R.id.flowci_create_folder_button);
        clickListener = new CreateFolderClickListener(CreateFolderDialog.this, editText, rootDir);
        createButton.setOnClickListener(clickListener);
    }

    public void handleCancelEvent() {
        Button cancelButton = (Button) findViewById(R.id.flowci_close_dialog_button);
        clickListener = new CloseDialogClickListener(CreateFolderDialog.this);
        cancelButton.setOnClickListener(clickListener);
    }

}
