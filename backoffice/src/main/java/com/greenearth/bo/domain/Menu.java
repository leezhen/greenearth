package com.greenearth.bo.domain;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.codehaus.jackson.annotate.JsonIgnore;

@Entity
public class Menu {
	private Integer id;
	private String icon;
	private String code;
	private String caption;
	private String viewRef;
	private Menu parentMenu;
	private List<Menu> subMenus;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getCode() {
		return code;
	}
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getCaption() {
		return caption;
	}
	public void setCaption(String caption) {
		this.caption = caption;
	}
	public String getViewRef() {
		return viewRef;
	}
	public void setViewRef(String viewRef) {
		this.viewRef = viewRef;
	}
	
	@ManyToOne
	@JoinColumn(name = "parent_id")
	@JsonIgnore
	public Menu getParentMenu() {
		return parentMenu;
	}
	public void setParentMenu(Menu parentMenu) {
		this.parentMenu = parentMenu;
	}
	
	@OneToMany(mappedBy = "parentMenu")
	public List<Menu> getSubMenus() {
		return subMenus;
	}
	public void setSubMenus(List<Menu> subMenus) {
		this.subMenus = subMenus;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Menu [id=");
		builder.append(id);
		builder.append(", code=");
		builder.append(code);
		builder.append(", caption=");
		builder.append(caption);
		builder.append(", view=");
		builder.append(viewRef);
		builder.append(", parentMenu=");
		builder.append(parentMenu);
		builder.append(", subMenus=");
		builder.append(subMenus);
		builder.append("]");
		return builder.toString();
	}
	
}
