import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permission-management',
  templateUrl: './permission-management.component.html',
  styleUrls: ['./permission-management.component.css']
})
export class PermissionManagementComponent implements OnInit {
  groupsResponse = [
    {
       "active":false,
       "createdTimestamp":null,
       "createdBy":null,
       "entityState":"Intact",
       "groupId":"Acc Maintenance tester",
       "externalGroupId":"Acc Maintenance tester",
       "derivedGroup":false,
       "groupName":"Acc Maintenance tester",
       "regionCode":null,
       "orgCode":null,
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.151+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"AccountOpenFulfillment",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"Account Open Fulfillment",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:54.132+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"ACCOUNT_OPEN_INQUIRY",
       "externalGroupId":"Account Open Inquiry",
       "derivedGroup":false,
       "groupName":"Account Open Inquiry",
       "regionCode":null,
       "orgCode":"CIBC_US",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:54.132+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"ACCOUNT_OPEN_MONITORING",
       "externalGroupId":"Account Open Monitoring",
       "derivedGroup":false,
       "groupName":"Account Open Monitoring",
       "regionCode":null,
       "orgCode":"CIBC_US",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:54.131+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"ACCOUNT_OPEN_PROCESSING",
       "externalGroupId":"Account Open Processing",
       "derivedGroup":false,
       "groupName":"Account Open Processing",
       "regionCode":null,
       "orgCode":"CIBC_US",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":null,
       "createdBy":null,
       "entityState":"Intact",
       "groupId":"Advisor",
       "externalGroupId":"",
       "derivedGroup":false,
       "groupName":"Advisor",
       "regionCode":null,
       "orgCode":null,
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:57.517+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"Advisor_Current",
       "externalGroupId":"Advisor_Current",
       "derivedGroup":false,
       "groupName":"Advisor_Current group",
       "regionCode":null,
       "orgCode":"IGM",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:57.518+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"Advisor_New",
       "externalGroupId":"Advisor_New",
       "derivedGroup":false,
       "groupName":"Advisor_New group",
       "regionCode":null,
       "orgCode":"IGM",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.172+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"APPSecurity",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"APPSecurity - Application Security",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.169+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"BA",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"BA - Branch Admin",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.169+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"BM",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"BM - Branch Manager",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.172+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"CAA",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"Client Account Analyst",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.174+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"CAM",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"Client Account Manager",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.173+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"CAS",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"Client Account Supervisor",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:57.517+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"Client_Primary",
       "externalGroupId":"Client_Primary",
       "derivedGroup":false,
       "groupName":"Client_Primary group",
       "regionCode":null,
       "orgCode":"IGM",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:57.518+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"Client_Secondary",
       "externalGroupId":"Client_Secondary",
       "derivedGroup":false,
       "groupName":"Client_Secondary group",
       "regionCode":null,
       "orgCode":"IGM",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.152+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"CLT",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"Client",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.168+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"CSA",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"CSA - Customer Services Admin",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:51.197+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"CSR",
       "externalGroupId":"^.*_CSR_User$",
       "derivedGroup":false,
       "groupName":"CSR - Customer Services Representative",
       "regionCode":null,
       "orgCode":"PCF",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:51.198+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"CSRSupervisor",
       "externalGroupId":"^.*_CSR_Admin$",
       "derivedGroup":false,
       "groupName":"CSRSupervisor - Customer Services Supervisor",
       "regionCode":null,
       "orgCode":"PCF",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:51.199+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"CUSTOMER",
       "externalGroupId":"^Customer_PCF$",
       "derivedGroup":false,
       "groupName":"Customer - Channel Service",
       "regionCode":null,
       "orgCode":"PCF",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":null,
       "createdBy":null,
       "entityState":"Intact",
       "groupId":"FIS Test",
       "externalGroupId":"",
       "derivedGroup":false,
       "groupName":"FIS Test",
       "regionCode":null,
       "orgCode":null,
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:57.748+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"FIS_BM",
       "externalGroupId":"FIS_BM",
       "derivedGroup":false,
       "groupName":"FIS_BM group",
       "regionCode":null,
       "orgCode":"FIS",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:57.749+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"FIS_IA",
       "externalGroupId":"FIS_IA",
       "derivedGroup":false,
       "groupName":"FIS_IA group",
       "regionCode":null,
       "orgCode":"FIS",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.181+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"GNA",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"Garnishment Analyst",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.183+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"GNM",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"Garnishment Manager",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.182+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"GNS",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"Garnishment Supervisor",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.150+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"IA",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"Invest Advisor",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.167+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"LAG",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"Listings Agent",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.178+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"LTA",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"Listings Analyst",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.180+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"LTM",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"Listings Manager",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.178+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"LTS",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"Listings Supervisor",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":false,
       "createdTimestamp":null,
       "createdBy":null,
       "entityState":"Intact",
       "groupId":"Ops_AccountProcessor",
       "externalGroupId":"",
       "derivedGroup":false,
       "groupName":"Ops Account Processor",
       "regionCode":null,
       "orgCode":null,
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:54.133+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"ORCHESTRATOR_ADMIN",
       "externalGroupId":"Orchestrator Admin",
       "derivedGroup":false,
       "groupName":"Orchestrator Admin",
       "regionCode":null,
       "orgCode":"CIBC_US",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:54.133+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"PROCESS_CONFIGURATION",
       "externalGroupId":"Process Configuration",
       "derivedGroup":false,
       "groupName":"Process Configuration",
       "regionCode":null,
       "orgCode":"CIBC_US",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.177+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"RBTF",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"Robert Fulfillment",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.174+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"RCA",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"Recon Analyst",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.176+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"RCM",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"Recon Manager",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.175+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"RCS",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"Recon Supervisor",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.170+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"SCPR",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"SCPR - Super Role for Security",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":null,
       "createdBy":null,
       "entityState":"Intact",
       "groupId":"Scripted Testing",
       "externalGroupId":"Scripted Testing",
       "derivedGroup":false,
       "groupName":"Scripted Testing",
       "regionCode":null,
       "orgCode":null,
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:47.171+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"SecuritySuper",
       "externalGroupId":null,
       "derivedGroup":false,
       "groupName":"SecuritySuper - Super Role for Security Configure",
       "regionCode":null,
       "orgCode":"BLOCKWORKX",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:54.134+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"SECURITY_ADMIN",
       "externalGroupId":"Security Admin",
       "derivedGroup":false,
       "groupName":"Security Admin",
       "regionCode":null,
       "orgCode":"CIBC_US",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:57.204+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"TD_BM",
       "externalGroupId":"TD_BM",
       "derivedGroup":false,
       "groupName":"TD_BM group",
       "regionCode":null,
       "orgCode":"TD",
       "activeUsers":[
 
       ]
    },
    {
       "active":true,
       "createdTimestamp":"2018-06-02T00:36:57.205+0000",
       "createdBy":"system",
       "entityState":"Intact",
       "groupId":"TD_IA",
       "externalGroupId":"TD_IA",
       "derivedGroup":false,
       "groupName":"TD_IA group",
       "regionCode":null,
       "orgCode":"TD",
       "activeUsers":[
 
       ]
    }
 ]
  constructor() { }

  ngOnInit() {
  }

}
