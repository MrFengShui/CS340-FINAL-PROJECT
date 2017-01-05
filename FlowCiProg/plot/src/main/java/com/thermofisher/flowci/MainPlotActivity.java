package com.thermofisher.flowci;

import android.content.Context;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.FragmentTabHost;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.ImageView;
import android.widget.TabHost.TabSpec;
import android.widget.TextView;

public class MainPlotActivity extends FragmentActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_plot);

        FragmentTabHost fragTabHost = (FragmentTabHost) findViewById(android.R.id.tabhost);
        fragTabHost.setup(this, getSupportFragmentManager(), android.R.id.tabcontent);

        TabSpec fscTabSpec = fragTabHost.newTabSpec("FSC Plot Tab").setIndicator(getTabIndicator(fragTabHost.getContext(), "FSC Plot", android.R.drawable.star_on));
        fragTabHost.addTab(fscTabSpec, PlotFragment.class, null);

        TabSpec sscTabSpec = fragTabHost.newTabSpec("SSC Plot Tab").setIndicator(getTabIndicator(fragTabHost.getContext(), "SSC Plot", android.R.drawable.star_on));
        fragTabHost.addTab(sscTabSpec, PlotFragment.class, null);
    }

    private View getTabIndicator(Context context, String title, int icon) {
        View view = LayoutInflater.from(context).inflate(R.layout.layout_plot_tab, null);
        ImageView tabIcon = (ImageView) view.findViewById(R.id.tab_image_view);
        tabIcon.setImageResource(icon);
        TextView tabTitle = (TextView) view.findViewById(R.id.tab_text_view);
        tabTitle.setText(title);
        return view;
    }

}
