package com.greenearth.bo.direct;

import com.softwarementors.extjs.djn.config.annotations.DirectMethod;

public class TestAction {
	@DirectMethod
	public String doEcho(String data) {
		return data;
	}

	@DirectMethod
	public double multiply(String num) {
		double num_ = Double.parseDouble(num);
		return num_ * 8.0;
	}

	public static class Node {
		public String id;
		public String text;
		public boolean leaf;
	}

}
