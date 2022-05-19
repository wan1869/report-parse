package com.denfo.edi.uniondrug.entity;

public class PIInterfaceBean {

    private Integer id;
    private String patIndexNo;
    private String buyerName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    private String buyerMobileno;

    public String getPatIndexNo() {
        return patIndexNo;
    }

    public void setPatIndexNo(String patIndexNo) {
        this.patIndexNo = patIndexNo;
    }

    public String getBuyerName() {
        return buyerName;
    }

    public void setBuyerName(String buyerName) {
        this.buyerName = buyerName;
    }

    public String getBuyerMobileno() {
        return buyerMobileno;
    }

    public void setBuyerMobileno(String buyerMobileno) {
        this.buyerMobileno = buyerMobileno;
    }
}
