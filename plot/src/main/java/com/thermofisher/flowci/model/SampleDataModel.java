package com.thermofisher.flowci.model;

/**
 * Created by MrFengShui on 2017-01-02.
 */

public class SampleDataModel {

    private float FSCData, SSCData;

    public float getFSCData() {
        return FSCData;
    }

    public void setFSCData(float FSCData) {
        this.FSCData = FSCData;
    }

    public float getSSCData() {
        return SSCData;
    }

    public void setSSCData(float SSCData) {
        this.SSCData = SSCData;
    }

    @Override
    public String toString() {
        return "SampleDataModel{" +
                "FSCData=" + FSCData +
                ", SSCData=" + SSCData +
                '}';
    }
}
