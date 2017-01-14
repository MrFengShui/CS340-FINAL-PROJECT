package com.thermofisher.flowci;

import android.os.Environment;

import org.junit.Test;

import java.io.File;
import java.io.IOException;

public class FileUnitTest {

    @Test
    public void testDirectoryContent() throws IOException {
        File file = new File(System.getProperty("user.dir"));
        File[] fileList = file.listFiles();
        System.out.println(Environment.getExternalStorageDirectory());
        System.out.println(file.getCanonicalPath());
        for (File fileItem : fileList) {
            System.out.println(fileItem.getName() + ":" + fileItem.isDirectory());
        }
    }

}
