package com.example.demo.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class User
{
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private String userid;
private String companyname;
private String emailid;
private String password;
private String confirmpassword;

public String getUserid() {
	return userid;
}
public void setUserid(String userid) {
	this.userid = userid;
}
public String getFirstname() {
	return companyname;
}
public void setFirstname(String firstname) {
	this.companyname = firstname;
}

public String getEmailid() {
	return emailid;
}
public void setEmailid(String emailid) {
	this.emailid = emailid;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getConfirmpassword() {
	return confirmpassword;
}
public void setConfirmpassword(String confirmpassword) {
	this.confirmpassword = confirmpassword;
}
@Override
public String toString() {
	return "User [userid=" + userid + ", companyname=" + companyname +  ", emailid=" + emailid
			+ ", password=" + password + ", confirmpassword=" + confirmpassword + "]";
}



}
