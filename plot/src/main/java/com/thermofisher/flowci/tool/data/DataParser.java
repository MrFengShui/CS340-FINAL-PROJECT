package com.thermofisher.flowci.tool.data;

import com.thermofisher.flowci.model.SampleDataModel;

import java.util.List;

public abstract class DataParser {

    public abstract List<Float> parseData(List<SampleDataModel> dataModelList);

}
