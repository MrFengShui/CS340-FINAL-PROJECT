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
import java.util.Date;

public class FileTableFactory {

    private static FileTableFactory tableFactory;

    private Activity context;
    private DecimalFormat decimalFormat;
    private File file;
    private File[] fileList;
    private SimpleDateFormat dateFormat;
    private TableLayout table;
    private TableRow.LayoutParams layoutParams;

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

    public void buildTableContent(String dirPath) {
        file = new File(dirPath);
        fileList = file.listFiles();

        if (fileList.length > 0) {
            for (File fileItem : fileList) {
                layoutParams = new TableRow.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);

                TableRow tableRow = new TableRow(context);
                tableRow.setLayoutParams(layoutParams);
                table.addView(tableRow);

                layoutParams = new TableRow.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);
                layoutParams.setMargins(5, 5, 5, 5);

                CheckBox box = new CheckBox(context);
                box.setLayoutParams(layoutParams);
                tableRow.addView(box, 0);

                layoutParams = new TableRow.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT, 0.75f);
                layoutParams.setMargins(5, 5, 5, 5);

                TextView fstView = new TextView(context);
                fstView.setLayoutParams(layoutParams);
                fstView.setGravity(Gravity.START | Gravity.CENTER_VERTICAL);
                fstView.setTextColor(fileItem.isDirectory() ? Color.MAGENTA : fstView.getTextColors().getDefaultColor());
                fstView.setText(fileItem.getName());
                tableRow.addView(fstView, 1);

                layoutParams = new TableRow.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT, 0.15f);
                layoutParams.setMargins(5, 5, 5, 5);

                TextView sndView = new TextView(context);
                sndView.setLayoutParams(layoutParams);
                sndView.setGravity(Gravity.CENTER_HORIZONTAL | Gravity.CENTER_VERTICAL);
                sndView.setText(formatFileSize(fileItem.length()));
                tableRow.addView(sndView, 2);

                layoutParams = new TableRow.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT, 0.25f);
                layoutParams.setMargins(5, 5, 5, 5);

                TextView trdView = new TextView(context);
                trdView.setLayoutParams(layoutParams);
                trdView.setGravity(Gravity.CENTER_HORIZONTAL | Gravity.CENTER_VERTICAL);
                trdView.setText(formatModifyDate(fileItem.lastModified()));
                tableRow.addView(trdView, 3);
            }
        }
    }

    public static FileTableFactory getTableFactoryInstance(Activity context, TableLayout tableLayout) {
        if (tableFactory == null) {
            tableFactory = new FileTableFactory(context, tableLayout);
        }

        return tableFactory;
    }

}
