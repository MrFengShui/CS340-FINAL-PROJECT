package com.thermofisher.flowci.tool.data;

import com.thermofisher.flowci.model.SampleDataModel;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class CSVDataFileManager {

    private static CSVDataFileManager csvFileManager;

    private BufferedReader br;
    private FileInputStream fis;
    private InputStreamReader isr;
    private List<SampleDataModel> dataModelList;
    private List<Float> dataList;
    private String filePath;

    private CSVDataFileManager(String filePath) {
        this.filePath = filePath;
    }

    private List<SampleDataModel> readDataToList() {
        try {
            dataModelList = new ArrayList<>();
            File file = new File(filePath);
            fis = new FileInputStream(file);
            isr = new InputStreamReader(fis);
            br = new BufferedReader(isr);
            String line;
            int count = 0;

            while ((line = br.readLine()) != null) {
                if (count++ > 0) {
                    String[] data = line.split(",");
                    SampleDataModel dataModel = new SampleDataModel();
                    dataModel.setFSCData(Float.valueOf(data[1]));
                    dataModel.setSSCData(Float.valueOf(data[2]));
                    dataModelList.add(dataModel);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                if (br != null) {
                    br.close();
                }

                if (isr != null) {
                    isr.close();
                }

                if (fis != null) {
                    fis.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return dataModelList;
    }

    public List<Float> fetchData(DataType dataType) {
        DataParser dataParser;

        switch (dataType) {
            case FSC:
                dataParser = new FSCDataParser();
                dataList = dataParser.parseData(readDataToList());
                break;
            case SSC:
                dataParser = new SSCDataParser();
                dataList = dataParser.parseData(readDataToList());
                break;
        }

        return dataList;
    }

    public static CSVDataFileManager getCSVFileManagerInstance(String filePath) {
        if (csvFileManager == null) {
            csvFileManager = new CSVDataFileManager(filePath);
        }

        return csvFileManager;
    }

}
