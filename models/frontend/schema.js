'use strict';var a11_0x4be984=a11_0x3ba8;(function(_0xee8717,_0x42c647){var _0x165128=a11_0x3ba8,_0x24e5d6=_0xee8717();while(!![]){try{var _0x528666=parseInt(_0x165128(0x130))/0x1*(parseInt(_0x165128(0x12a))/0x2)+parseInt(_0x165128(0x127))/0x3+parseInt(_0x165128(0x133))/0x4*(-parseInt(_0x165128(0x137))/0x5)+parseInt(_0x165128(0x131))/0x6*(parseInt(_0x165128(0x12c))/0x7)+-parseInt(_0x165128(0x12b))/0x8+parseInt(_0x165128(0x138))/0x9+parseInt(_0x165128(0x136))/0xa*(-parseInt(_0x165128(0x12e))/0xb);if(_0x528666===_0x42c647)break;else _0x24e5d6['push'](_0x24e5d6['shift']());}catch(_0x5d366c){_0x24e5d6['push'](_0x24e5d6['shift']());}}}(a11_0x35d1,0x52541));var __importDefault=this&&this[a11_0x4be984(0x12f)]||function(_0x3fea8a){return _0x3fea8a&&_0x3fea8a['__esModule']?_0x3fea8a:{'default':_0x3fea8a};};Object[a11_0x4be984(0x13c)](exports,a11_0x4be984(0x139),{'value':!![]});function a11_0x3ba8(_0x49d708,_0x1b8c8c){var _0x35d1f9=a11_0x35d1();return a11_0x3ba8=function(_0x3ba8cc,_0xb6f25e){_0x3ba8cc=_0x3ba8cc-0x127;var _0xb64dad=_0x35d1f9[_0x3ba8cc];return _0xb64dad;},a11_0x3ba8(_0x49d708,_0x1b8c8c);}function a11_0x35d1(){var _0x2010e5=['11489357jSfQWC','__importDefault','9JJvszl','6ykxaqZ','ObjectId','4772XjGiVg','default','Role','10yhGQJj','210cQxVal','1878210AyjuAb','__esModule','SMTPMailer','Policy','defineProperty','686973KPPxGn','mongoose','Schema','113254RJWFfh','240200AUbtvK','3601577vnyTRw','Types'];a11_0x35d1=function(){return _0x2010e5;};return a11_0x35d1();}var mongoose_1=require(a11_0x4be984(0x128)),statics_1=__importDefault(require('./statics')),schema=new mongoose_1[(a11_0x4be984(0x129))]({'_id':{'type':mongoose_1[a11_0x4be984(0x129)]['Types'][a11_0x4be984(0x132)]},'domain':{'type':String,'required':!![],'unique':!![]},'name':{'type':String,'required':!![]},'settings':{'specifics':[{'setting':{'type':mongoose_1[a11_0x4be984(0x129)][a11_0x4be984(0x12d)][a11_0x4be984(0x132)],'ref':'GlobalSetting'},'flag':{'type':String||Boolean||Number,'required':!![]}}],'default_mailer':{'type':mongoose_1[a11_0x4be984(0x129)][a11_0x4be984(0x12d)]['ObjectId'],'ref':a11_0x4be984(0x13a),'required':![]},'disallowed_roles':{'type':mongoose_1[a11_0x4be984(0x129)][a11_0x4be984(0x12d)]['ObjectId'],'ref':a11_0x4be984(0x135)},'allowed_policies':[{'type':mongoose_1[a11_0x4be984(0x129)]['Types']['ObjectId'],'ref':a11_0x4be984(0x13b)}],'disallowed_policies':[{'type':mongoose_1[a11_0x4be984(0x129)][a11_0x4be984(0x12d)][a11_0x4be984(0x132)],'ref':a11_0x4be984(0x13b)}]}});exports[a11_0x4be984(0x134)]=(0x0,statics_1['default'])(schema);