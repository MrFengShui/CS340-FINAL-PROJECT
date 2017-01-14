package com.thermofisher.flowci.tool;

import android.content.Context;

import java.io.File;

public class DirectoryFactory {

    public static final String HOME_DIRECTORY = "ThermoFisher";
    public static final String NEW_FOLDER = "New Folder";

    private static DirectoryFactory directoryFactory;

    private Context context;

    private DirectoryFactory(Context context) {
        this.context = context;
    }

    public String getRootDirectory() {
        return context.getExternalFilesDir(null).getAbsolutePath();
    }

    public String getHomeDirectory() {
        return getRootDirectory() + File.separator + HOME_DIRECTORY;
    }

    public static DirectoryFactory getDirectoryInstance(Context context) {
        if (directoryFactory == null) {
            directoryFactory = new DirectoryFactory(context);
        }

        return directoryFactory;
    }

}
