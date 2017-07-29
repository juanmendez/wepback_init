"use strict";
/**
 * Created by juan on 7/6/2016.
 */
import {login} from './login';
import * as $ from "jquery";

$(()=>{
    document.write( login("admin", "radical"));
});