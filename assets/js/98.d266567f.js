(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{535:function(e,a,t){"use strict";t.r(a);var n=t(56),o=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"designated-fee-delegation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#designated-fee-delegation"}},[e._v("#")]),e._v(" Designated Fee Delegation")]),e._v(" "),t("p",[e._v("The TX-fee-delegation mechanism (both VIP-191 and MPP) on VeChainThor. The demo is built using tools "),t("a",{attrs:{href:"https://github.com/vechain/connex-framework",target:"_blank",rel:"noopener noreferrer"}},[e._v("connex-framework"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://github.com/vechain/connex.driver-nodejs",target:"_blank",rel:"noopener noreferrer"}},[e._v("connex.driver-nodejs"),t("OutboundLink")],1),e._v(" that implement the "),t("a",{attrs:{href:"https://github.com/vechain/connex",target:"_blank",rel:"noopener noreferrer"}},[e._v("Connex"),t("OutboundLink")],1),e._v(" interface in a NodeJS environment.")]),e._v(" "),t("p",[e._v("There are three accounts used in the demo:")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("SENDER")]),e._v(" whose address begins with "),t("code",[e._v("0xd551")]),e._v(",")]),e._v(" "),t("li",[t("code",[e._v("DELEGATOR")]),e._v(" (or gas-payer) whose address begins with "),t("code",[e._v("0xe466")]),e._v(", and")]),e._v(" "),t("li",[t("code",[e._v("RECIPIENT")]),e._v(" whose address begins with "),t("code",[e._v("0x9143")]),e._v(".\nTo demonstrate VIP-191, I created one TX from "),t("code",[e._v("SENDER")]),e._v(" to "),t("code",[e._v("RECIPIENT")]),e._v(". The TX was co-signed by "),t("code",[e._v("SENDER")]),e._v(" and "),t("code",[e._v("DELEGATOR")]),e._v(" to allow TX fee paid by "),t("code",[e._v("DELEGATOR")]),e._v(".")])]),e._v(" "),t("p",[e._v("To demonstrate MPP, I created two TXs sent from "),t("code",[e._v("DELEGATOR")]),e._v(" to call functions of the built-in contract Prototype to add a payer-user relation and funding plan as described above. I then created one TX from "),t("code",[e._v("SENDER")]),e._v(" to "),t("code",[e._v("DELEGATOR")]),e._v(" to demonstrate the effect of MPP. Note that "),t("code",[e._v("DELEGATOR")]),e._v(" is the master of itself since it is a normal account rather than a contract. The TX can only be sent to "),t("code",[e._v("DELEGATOR")]),e._v(" or otherwise it wouldn't be funded by "),t("code",[e._v("DELEGATOR")]),e._v(" according to the rules set by MPP.")]),e._v(" "),t("h2",{attrs:{id:"connex-interface-for-vip-191"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connex-interface-for-vip-191"}},[e._v("#")]),e._v(" CONNEX INTERFACE FOR VIP-191")]),e._v(" "),t("p",[e._v("The Connex interface has been updated to support VIP-191. I want to show you that it is pretty easy to use Connex to construct a VIP-191 enabled TX.")]),e._v(" "),t("p",[e._v("There are two extra things you need to do on top of the normal procedure of constructing a TX:")]),e._v(" "),t("p",[e._v("Create your own function with the following definition:")]),e._v(" "),t("p",[t("code",[e._v("function (unsignedTx: { raw: string, origin: string }): Promise")])]),e._v(" "),t("p",[e._v("This function is typically responsible for send data to the gas-payer, waiting for its response and returns a Promise, if resolved, carrying the gas-payer's digital signature on the corresponding TXID.")]),e._v(" "),t("p",[e._v("Pass the function to the instance of "),t("code",[e._v("Connex.Vendor.TxSigningService")]),e._v(", as you've already created for TX construction, via the "),t("code",[e._v("delegate")]),e._v(" method. For instance, you may add a line such as:")]),e._v(" "),t("p",[t("code",[e._v("signingService.delegate(MyFunc);")])]),e._v(" "),t("p",[e._v("That's it!")]),e._v(" "),t("blockquote",[t("p",[e._v("Note that the function I made in the demo code is NOT a typical function you would see in a real application. It is created purely for this demo and should not be considered as an example of creating such a function.")])]),e._v(" "),t("p",[e._v("Results output")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("--------------------------\nVIP-191\n--------------------------\nTXID       = 0xb58e1d1bf9da3414c24df51926003ebcbac7eb10246dd25548ccfd9202d4276e\nFrom       = 0xd55100eedb61f1e553a38c33a234ce07952c43f2\nTo         = 0x91436f1E5008B2E6093E114A25842F060012685d\nGasPayer   = 0xe4660c72dea1d9fc2a0dc2b3a42107d37edc6327\nGasUsed    = 21000\n...\n")])])]),t("p",[e._v("The first part shows information of the VIP-191 enabled TX. It can be seen that the actual gas-payer was indeed DELEGATOR rather than "),t("code",[e._v("SENDER")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("--------------------------\nMPP - Add User\n--------------------------\nTXID       = 0x508f50692c88054c5f8df982937b2871cae3cde002a4bc58e975277acca53c87\nFrom       = 0xe4660c72dea1d9fc2a0dc2b3a42107d37edc6327\nTo         = 0x000000000000000000000050726f746f74797065\nGasPayer   = 0xe4660c72dea1d9fc2a0dc2b3a42107d37edc6327\nGasUsed    = 25074\n...\n--------------------------\nMPP - Add Credit Plan\n--------------------------\nTXID       = 0x57329507daadb47a8ea68375577f9699fce3f1329df4703451be36d3804aa853\nFrom       = 0xe4660c72dea1d9fc2a0dc2b3a42107d37edc6327\nTo         = 0x000000000000000000000050726f746f74797065\nGasPayer   = 0xe4660c72dea1d9fc2a0dc2b3a42107d37edc6327\nGasUsed    = 44811\n...\n")])])]),t("p",[e._v("The second part shows information of the two TXs "),t("code",[e._v("DELEGATOR")]),e._v(" sent to the built-in contract Prototype to activate MPP for "),t("code",[e._v("SENDER")]),e._v(". The overhead costs for adding a user and a credit plan are 25k and 45k gas, respectively.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("--------------------------\nMPP - User Sends TX\n--------------------------\nTXID       = 0x87b68a65105f2cc5746b88e1e0fd5e1cf4f6d2dbf8459bb8ef2599957ffcb655\nFrom       = 0xd55100eedb61f1e553a38c33a234ce07952c43f2\nTo         = 0xe4660c72dea1d9fc2a0dc2b3a42107d37edc6327\nGasPayer   = 0xe4660c72dea1d9fc2a0dc2b3a42107d37edc6327\nGasUsed    = 21000\n")])])]),t("p",[e._v("The last part shows the TX sent from "),t("code",[e._v("SENDER")]),e._v(" to "),t("code",[e._v("DELEGATOR")]),e._v(" is indeed paid by "),t("code",[e._v("DELEGATOR")]),e._v(" under MPP.")])])}),[],!1,null,null,null);a.default=o.exports}}]);