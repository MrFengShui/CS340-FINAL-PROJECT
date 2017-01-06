package com.thermofisher.flowci.tool.data;

public enum DataType {

    SSC("SSC_DATA"), FSC("FSC_DATA");

    private String type;

    private DataType(String type) {
        this.type = type;
    }

}
