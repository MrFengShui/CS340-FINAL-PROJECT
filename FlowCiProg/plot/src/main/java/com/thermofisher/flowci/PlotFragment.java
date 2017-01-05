package com.thermofisher.flowci;

import android.support.v4.app.Fragment;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

public class PlotFragment extends Fragment {

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.layout_plot_fragment, container, false);
        TextView tabContent = (TextView) view.findViewById(R.id.fragment_text_view);
        tabContent.setText(this.getTag() + " Content");
        return view;
    }

}
