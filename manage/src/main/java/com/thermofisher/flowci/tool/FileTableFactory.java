package com.thermofisher.flowci.tool;

import android.app.Activity;
import android.graphics.Color;
import android.view.Gravity;
import android.view.ViewGroup;
import android.widget.CheckBox;
import android.widget.TableLayout;
import android.widget.TableRow;
import android.widget.TextView;

import java.io.File;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.List;

public class FileTableFactory {

    private static FileTableFactory tableFactory;

    private FileOrderComparator orderComparator;

    private Activity context;
    private CheckBox box;
    private DecimalFormat decimalFormat;
    private File file;
    private SimpleDateFormat dateFormat;
    private TableLayout table;
    private TableRow.LayoutParams layoutParams;
    private TextView textView;

    private FileTableFactory(Activity context, TableLayout table) {
        this.context = context;
        this.table = table;
    }

    private String formatFileSize(double size) {
        if (decimalFormat == null) {
            decimalFormat = new DecimalFormat("0.00");
        }

        if (size < 1024.0) {
            return decimalFormat.format(size) + "Bytes";
        } else if (size >= 1024.0 && size < 1024.0 * 1024.0) {
            return decimalFormat.format(size / 1024.0) + "KB";
        } else {
            return decimalFormat.format(size / (1024.0 * 1024.0)) + "MB";
        }
    }

    private String formatModifyDate(long date) {
        if (dateFormat == null) {
            dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        }

        return dateFormat.format(new Date(date));
    }

    private CheckBox createCheckBox() {
        layoutParams = new TableRow.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        layoutParams.setMargins(5, 5, 5, 5);

        box = new CheckBox(context);
        box.setLayoutParams(layoutParams);
        return box;
    }

    private TextView createTextView(String text, float weight, int horizon) {
        layoutParams = new TableRow.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT, weight);
        layoutParams.setMargins(5, 5, 5, 5);

        textView = new TextView(context);
        textView.setLayoutParams(layoutParams);
        textView.setGravity(horizon | Gravity.CENTER_VERTICAL);
        textView.setText(text);
        return textView;
    }

    private TextView createTextView(boolean flag, String text, float weight, int horizon) {
        layoutParams = new TableRow.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT, weight);
        layoutParams.setMargins(5, 5, 5, 5);

        textView = new TextView(context);
        textView.setLayoutParams(layoutParams);
        textView.setGravity(horizon | Gravity.CENTER_VERTICAL);
        textView.setTextColor(flag ? Color.MAGENTA : textView.getTextColors().getDefaultColor());
        textView.setText(text);
        return textView;
    }

    private File[] resort(File[] files) {
        List<File> dirList = new ArrayList<>();
        List<File> fileList = new ArrayList<>();

        for (File file : files) {
            if (file.isDirectory()) {
                dirList.add(file);
            } else if (file.isFile()) {
                fileList.add(file);
            } else {
                continue;
            }
        }

        if (orderComparator == null) {
            orderComparator = new FileOrderComparator();
        }

        Collections.sort(dirList, orderComparator);
        Collections.sort(fileList, orderComparator);
        dirList.addAll(fileList);
        files = dirList.toArray(files);
        return files;
    }

    public void buildTableContent(String dirPath) {
        file = new File(dirPath);
        File[] fileList = resort(file.listFiles());

        if (fileList.length > 0) {
            for (File fileItem : fileList) {
                layoutParams = new TableRow.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);

                TableRow tableRow = new TableRow(context);
                tableRow.setLayoutParams(layoutParams);
                table.addView(tableRow);

                box = createCheckBox();
                tableRow.addView(box, 0);

                textView = createTextView(fileItem.isDirectory(), fileItem.getName(), 0.75f, Gravity.START);
                tableRow.addView(textView, 1);

                textView = createTextView(formatFileSize(fileItem.length()), 0.15f, Gravity.CENTER_HORIZONTAL);
                tableRow.addView(textView, 2);

                textView = createTextView(formatModifyDate(fileItem.lastModified()), 0.25f, Gravity.CENTER_HORIZONTAL);
                tableRow.addView(textView, 3);
            }
        }
    }

    public static FileTableFactory getTableFactoryInstance(Activity context, TableLayout tableLayout) {
        if (tableFactory == null) {
            tableFactory = new FileTableFactory(context, tableLayout);
        }

        return tableFactory;
    }

    private class FileOrderComparator implements Comparator<File> {

        @Override
        public int compare(File o1, File o2) {
            return o1.compareTo(o2);
        }

    }

}
