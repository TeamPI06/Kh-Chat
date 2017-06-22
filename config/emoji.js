/**
 * Created by sarthyrith on 6/22/17.
 */
// check CSS for the description



/*! Copyright Twitter Inc. and other contributors. Licensed under MIT */
// DISCLAIMER: latest emojicons added by Derk Jan Speelman ALL RIGHTS RESERVERD BY TWITTER INC. AND COPYRIGHTS TO TWITTER INC. I DONT CLAIM ANY COPYRIGHTS.


var twemoji = function() {
    "use strict";
    var twemoji = {
            base: (location.protocol === "https:" ? "https:" : "http:") + "//abs.twimg.com/emoji/v2/",
            ext: ".png",
            size: "72x72",
            className: "emoji",
            convert: {
                fromCodePoint: fromCodePoint,
                toCodePoint: toCodePoint
            },
            onerror: function onerror() {
                if (this.parentNode) {
                    this.parentNode.replaceChild(createText(this.alt), this)
                }
            },
            parse: parse,
            replace: replace,
            test: test
        },
        escaper = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            '"': "&quot;"
        },
        re = /((?:\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC67|\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC66|\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67|\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67|\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66|\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68|\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69|\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC68|\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC69)|(?:(?:\uD83D\uDE00|\uD83D\uDE2C|\uD83D\uDE01|\uD83D\uDE02|\uD83D\uDE03|\uD83D\uDE04|\uD83D\uDE05|\uD83D\uDE06|\uD83D\uDE07|\uD83D\uDE09|\uD83D\uDE0A|\uD83D\uDE42|\uD83D\uDE43|\u263A|\uD83D\uDE0B|\uD83D\uDE0C|\uD83D\uDE0D|\uD83D\uDE18|\uD83D\uDE17|\uD83D\uDE19|\uD83D\uDE1A|\uD83D\uDE1C|\uD83D\uDE1D|\uD83D\uDE1B|\uD83E\uDD11|\uD83E\uDD13|\uD83D\uDE0E|\uD83E\uDD17|\uD83D\uDE0F|\uD83D\uDE36|\uD83D\uDE10|\uD83D\uDE11|\uD83D\uDE12|\uD83D\uDE44|\uD83E\uDD14|\uD83D\uDE33|\uD83D\uDE1E|\uD83D\uDE1F|\uD83D\uDE20|\uD83D\uDE21|\uD83D\uDE14|\uD83D\uDE15|\uD83D\uDE41|\u2639|\uD83D\uDE23|\uD83D\uDE16|\uD83D\uDE2B|\uD83D\uDE29|\uD83D\uDE24|\uD83D\uDE2E|\uD83D\uDE31|\uD83D\uDE28|\uD83D\uDE30|\uD83D\uDE2F|\uD83D\uDE26|\uD83D\uDE27|\uD83D\uDE22|\uD83D\uDE25|\uD83D\uDE2A|\uD83D\uDE13|\uD83D\uDE2D|\uD83D\uDE35|\uD83D\uDE32|\uD83E\uDD10|\uD83D\uDE37|\uD83E\uDD12|\uD83E\uDD15|\uD83D\uDE34|\uD83D\uDCA4|\uD83D\uDCA9|\uD83D\uDE08|\uD83D\uDC7F|\uD83D\uDC79|\uD83D\uDC7A|\uD83D\uDC80|\uD83D\uDC7B|\uD83D\uDC7D|\uD83E\uDD16|\uD83D\uDE3A|\uD83D\uDE38|\uD83D\uDE39|\uD83D\uDE3B|\uD83D\uDE3C|\uD83D\uDE3D|\uD83D\uDE40|\uD83D\uDE3F|\uD83D\uDE3E|\uD83D\uDE4C|\uD83D\uDC4F|\uD83D\uDC4B|\uD83D\uDC4D|\uD83D\uDC4E|\uD83D\uDC4A|\u270A|\u270C|\uD83D\uDC4C|\u270B|\uD83D\uDC50|\uD83D\uDCAA|\uD83D\uDE4F|\u261D|\uD83D\uDC46|\uD83D\uDC47|\uD83D\uDC48|\uD83D\uDC49|\uD83D\uDD95|\uD83D\uDD90|\uD83E\uDD18|\uD83D\uDD96|\u270D|\uD83D\uDC85|\uD83D\uDC44|\uD83D\uDC45|\uD83D\uDC42|\uD83D\uDC43|\uD83D\uDC41|\uD83D\uDC40|\uD83D\uDC64|\uD83D\uDC65|\uD83D\uDDE3|\uD83D\uDC76|\uD83D\uDC66|\uD83D\uDC67|\uD83D\uDC68|\uD83D\uDC69|\uD83D\uDC71|\uD83D\uDC74|\uD83D\uDC75|\uD83D\uDC72|\uD83D\uDC73|\uD83D\uDC6E|\uD83D\uDC77|\uD83D\uDC82|\uD83D\uDD75|\uD83C\uDF85|\uD83D\uDC7C|\uD83D\uDC78|\uD83D\uDC70|\uD83D\uDEB6|\uD83C\uDFC3|\uD83D\uDC83|\uD83D\uDC6F|\uD83D\uDC6B|\uD83D\uDC6C|\uD83D\uDC6D|\uD83D\uDE47|\uD83D\uDC81|\uD83D\uDE45|\uD83D\uDE46|\uD83D\uDE4B|\uD83D\uDE4E|\uD83D\uDE4D|\uD83D\uDC87|\uD83D\uDC86|\uD83D\uDC91|\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC69|\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC68|\uD83D\uDC8F|\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69|\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68|\uD83D\uDC6A|\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66|\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67|\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66|\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67|\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC66|\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC67|\uD83D\uDC5A|\uD83D\uDC55|\uD83D\uDC56|\uD83D\uDC54|\uD83D\uDC57|\uD83D\uDC59|\uD83D\uDC58|\uD83D\uDC84|\uD83D\uDC8B|\uD83D\uDC63|\uD83D\uDC60|\uD83D\uDC61|\uD83D\uDC62|\uD83D\uDC5E|\uD83D\uDC5F|\uD83D\uDC52|\uD83C\uDFA9|\uD83C\uDF93|\uD83D\uDC51|\u26D1|\uD83C\uDF92|\uD83D\uDC5D|\uD83D\uDC5B|\uD83D\uDC5C|\uD83D\uDCBC|\uD83D\uDC53|\uD83D\uDD76|\uD83D\uDC8D|\uD83C\uDF02|\uD83D\uDC36|\uD83D\uDC31|\uD83D\uDC2D|\uD83D\uDC39|\uD83D\uDC30|\uD83D\uDC3B|\uD83D\uDC3C|\uD83D\uDC28|\uD83D\uDC2F|\uD83E\uDD81|\uD83D\uDC2E|\uD83D\uDC37|\uD83D\uDC3D|\uD83D\uDC38|\uD83D\uDC19|\uD83D\uDC35|\uD83D\uDE48|\uD83D\uDE49|\uD83D\uDE4A|\uD83D\uDC12|\uD83D\uDC14|\uD83D\uDC27|\uD83D\uDC26|\uD83D\uDC24|\uD83D\uDC23|\uD83D\uDC25|\uD83D\uDC3A|\uD83D\uDC17|\uD83D\uDC34|\uD83E\uDD84|\uD83D\uDC1D|\uD83D\uDC1B|\uD83D\uDC0C|\uD83D\uDC1E|\uD83D\uDC1C|\uD83D\uDD77|\uD83E\uDD82|\uD83E\uDD80|\uD83D\uDC0D|\uD83D\uDC22|\uD83D\uDC20|\uD83D\uDC1F|\uD83D\uDC21|\uD83D\uDC2C|\uD83D\uDC33|\uD83D\uDC0B|\uD83D\uDC0A|\uD83D\uDC06|\uD83D\uDC05|\uD83D\uDC03|\uD83D\uDC02|\uD83D\uDC04|\uD83D\uDC2A|\uD83D\uDC2B|\uD83D\uDC18|\uD83D\uDC10|\uD83D\uDC0F|\uD83D\uDC11|\uD83D\uDC0E|\uD83D\uDC16|\uD83D\uDC00|\uD83D\uDC01|\uD83D\uDC13|\uD83E\uDD83|\uD83D\uDD4A|\uD83D\uDC15|\uD83D\uDC29|\uD83D\uDC08|\uD83D\uDC07|\uD83D\uDC3F|\uD83D\uDC3E|\uD83D\uDC09|\uD83D\uDC32|\uD83C\uDF35|\uD83C\uDF84|\uD83C\uDF32|\uD83C\uDF33|\uD83C\uDF34|\uD83C\uDF31|\uD83C\uDF3F|\u2618|\uD83C\uDF40|\uD83C\uDF8D|\uD83C\uDF8B|\uD83C\uDF43|\uD83C\uDF42|\uD83C\uDF41|\uD83C\uDF3E|\uD83C\uDF3A|\uD83C\uDF3B|\uD83C\uDF39|\uD83C\uDF37|\uD83C\uDF3C|\uD83C\uDF38|\uD83D\uDC90|\uD83C\uDF44|\uD83C\uDF30|\uD83C\uDF83|\uD83D\uDC1A|\uD83D\uDD78|\uD83C\uDF0E|\uD83C\uDF0D|\uD83C\uDF0F|\uD83C\uDF15|\uD83C\uDF16|\uD83C\uDF17|\uD83C\uDF18|\uD83C\uDF11|\uD83C\uDF12|\uD83C\uDF13|\uD83C\uDF14|\uD83C\uDF1A|\uD83C\uDF1D|\uD83C\uDF1B|\uD83C\uDF1C|\uD83C\uDF1E|\uD83C\uDF19|\u2B50|\uD83C\uDF1F|\uD83D\uDCAB|\u2728|\u2604|\u2600|\uD83C\uDF24|\u26C5|\uD83C\uDF25|\uD83C\uDF26|\u2601|\uD83C\uDF27|\u26C8|\uD83C\uDF29|\u26A1|\uD83D\uDD25|\uD83D\uDCA5|\u2744|\uD83C\uDF28|\u2603|\u26C4|\uD83C\uDF2C|\uD83D\uDCA8|\uD83C\uDF2A|\uD83C\uDF2B|\u2602|\u2614|\uD83D\uDCA7|\uD83D\uDCA6|\uD83C\uDF0A|\uD83D\uDC36|\uD83D\uDC31|\uD83D\uDC2D|\uD83D\uDC39|\uD83D\uDC30|\uD83D\uDC3B|\uD83D\uDC3C|\uD83D\uDC28|\uD83D\uDC2F|\uD83E\uDD81|\uD83D\uDC2E|\uD83D\uDC37|\uD83D\uDC3D|\uD83D\uDC38|\uD83D\uDC19|\uD83D\uDC35|\uD83D\uDE48|\uD83D\uDE49|\uD83D\uDE4A|\uD83D\uDC12|\uD83D\uDC14|\uD83D\uDC27|\uD83D\uDC26|\uD83D\uDC24|\uD83D\uDC23|\uD83D\uDC25|\uD83D\uDC3A|\uD83D\uDC17|\uD83D\uDC34|\uD83E\uDD84|\uD83D\uDC1D|\uD83D\uDC1B|\uD83D\uDC0C|\uD83D\uDC1E|\uD83D\uDC1C|\uD83D\uDD77|\uD83E\uDD82|\uD83E\uDD80|\uD83D\uDC0D|\uD83D\uDC22|\uD83D\uDC20|\uD83D\uDC1F|\uD83D\uDC21|\uD83D\uDC2C|\uD83D\uDC33|\uD83D\uDC0B|\uD83D\uDC0A|\uD83D\uDC06|\uD83D\uDC05|\uD83D\uDC03|\uD83D\uDC02|\uD83D\uDC04|\uD83D\uDC2A|\uD83D\uDC2B|\uD83D\uDC18|\uD83D\uDC10|\uD83D\uDC0F|\uD83D\uDC11|\uD83D\uDC0E|\uD83D\uDC16|\uD83D\uDC00|\uD83D\uDC01|\uD83D\uDC13|\uD83E\uDD83|\uD83D\uDD4A|\uD83D\uDC15|\uD83D\uDC29|\uD83D\uDC08|\uD83D\uDC07|\uD83D\uDC3F|\uD83D\uDC3E|\uD83D\uDC09|\uD83D\uDC32|\uD83C\uDF35|\uD83C\uDF84|\uD83C\uDF32|\uD83C\uDF33|\uD83C\uDF34|\uD83C\uDF31|\uD83C\uDF3F|\u2618|\uD83C\uDF40|\uD83C\uDF8D|\uD83C\uDF8B|\uD83C\uDF43|\uD83C\uDF42|\uD83C\uDF41|\uD83C\uDF3E|\uD83C\uDF3A|\uD83C\uDF3B|\uD83C\uDF39|\uD83C\uDF37|\uD83C\uDF3C|\uD83C\uDF38|\uD83D\uDC90|\uD83C\uDF44|\uD83C\uDF30|\uD83C\uDF83|\uD83D\uDC1A|\uD83D\uDD78|\uD83C\uDF0E|\uD83C\uDF0D|\uD83C\uDF0F|\uD83C\uDF15|\uD83C\uDF16|\uD83C\uDF17|\uD83C\uDF18|\uD83C\uDF11|\uD83C\uDF12|\uD83C\uDF13|\uD83C\uDF14|\uD83C\uDF1A|\uD83C\uDF1D|\uD83C\uDF1B|\uD83C\uDF1C|\uD83C\uDF1E|\uD83C\uDF19|\u2B50|\uD83C\uDF1F|\uD83D\uDCAB|\u2728|\u2604|\u2600|\uD83C\uDF24|\u26C5|\uD83C\uDF25|\uD83C\uDF26|\u2601|\uD83C\uDF27|\u26C8|\uD83C\uDF29|\u26A1|\uD83D\uDD25|\uD83D\uDCA5|\u2744|\uD83C\uDF28|\u2603|\u26C4|\uD83C\uDF2C|\uD83D\uDCA8|\uD83C\uDF2A|\uD83C\uDF2B|\u2602|\u2614|\uD83D\uDCA7|\uD83D\uDCA6|\uD83C\uDF0A|\uD83C\uDF4F|\uD83C\uDF4E|\uD83C\uDF50|\uD83C\uDF4A|\uD83C\uDF4B|\uD83C\uDF4C|\uD83C\uDF49|\uD83C\uDF47|\uD83C\uDF53|\uD83C\uDF48|\uD83C\uDF52|\uD83C\uDF51|\uD83C\uDF4D|\uD83C\uDF45|\uD83C\uDF46|\uD83C\uDF36|\uD83C\uDF3D|\uD83C\uDF60|\uD83C\uDF6F|\uD83C\uDF5E|\uD83E\uDDC0|\uD83C\uDF57|\uD83C\uDF56|\uD83C\uDF64|\uD83C\uDF73|\uD83C\uDF54|\uD83C\uDF5F|\uD83C\uDF2D|\uD83C\uDF55|\uD83C\uDF5D|\uD83C\uDF2E|\uD83C\uDF2F|\uD83C\uDF5C|\uD83C\uDF72|\uD83C\uDF65|\uD83C\uDF63|\uD83C\uDF71|\uD83C\uDF5B|\uD83C\uDF59|\uD83C\uDF5A|\uD83C\uDF58|\uD83C\uDF62|\uD83C\uDF61|\uD83C\uDF67|\uD83C\uDF68|\uD83C\uDF66|\uD83C\uDF70|\uD83C\uDF82|\uD83C\uDF6E|\uD83C\uDF6C|\uD83C\uDF6D|\uD83C\uDF6B|\uD83C\uDF7F|\uD83C\uDF69|\uD83C\uDF6A|\uD83C\uDF7A|\uD83C\uDF7B|\uD83C\uDF77|\uD83C\uDF78|\uD83C\uDF79|\uD83C\uDF7E|\uD83C\uDF76|\uD83C\uDF75|\u2615|\uD83C\uDF7C|\uD83C\uDF74|\uD83C\uDF7D|\u26BD|\uD83C\uDFC0|\uD83C\uDFC8|\u26BE|\uD83C\uDFBE|\uD83C\uDFD0|\uD83C\uDFC9|\uD83C\uDFB1|\u26F3|\uD83C\uDFCC|\uD83C\uDFD3|\uD83C\uDFF8|\uD83C\uDFD2|\uD83C\uDFD1|\uD83C\uDFCF|\uD83C\uDFBF|\u26F7|\uD83C\uDFC2|\u26F8|\uD83C\uDFF9|\uD83C\uDFA3|\uD83D\uDEA3|\uD83C\uDFCA|\uD83C\uDFC4|\uD83D\uDEC0|\u26F9|\uD83C\uDFCB|\uD83D\uDEB4|\uD83D\uDEB5|\uD83C\uDFC7|\uD83D\uDD74|\uD83C\uDFC6|\uD83C\uDFBD|\uD83C\uDFC5|\uD83C\uDF96|\uD83C\uDF97|\uD83C\uDFF5|\uD83C\uDFAB|\uD83C\uDF9F|\uD83C\uDFAD|\uD83C\uDFA8|\uD83C\uDFAA|\uD83C\uDFA4|\uD83C\uDFA7|\uD83C\uDFBC|\uD83C\uDFB9|\uD83C\uDFB7|\uD83C\uDFBA|\uD83C\uDFB8|\uD83C\uDFBB|\uD83C\uDFAC|\uD83C\uDFAE|\uD83D\uDC7E|\uD83C\uDFAF|\uD83C\uDFB2|\uD83C\uDFB0|\uD83C\uDFB3|\uD83D\uDE97|\uD83D\uDE95|\uD83D\uDE99|\uD83D\uDE8C|\uD83D\uDE8E|\uD83C\uDFCE|\uD83D\uDE93|\uD83D\uDE91|\uD83D\uDE92|\uD83D\uDE90|\uD83D\uDE9A|\uD83D\uDE9B|\uD83D\uDE9C|\uD83C\uDFCD|\uD83D\uDEB2|\uD83D\uDEA8|\uD83D\uDE94|\uD83D\uDE8D|\uD83D\uDE98|\uD83D\uDE96|\uD83D\uDEA1|\uD83D\uDEA0|\uD83D\uDE9F|\uD83D\uDE83|\uD83D\uDE8B|\uD83D\uDE9D|\uD83D\uDE84|\uD83D\uDE85|\uD83D\uDE88|\uD83D\uDE9E|\uD83D\uDE82|\uD83D\uDE86|\uD83D\uDE87|\uD83D\uDE8A|\uD83D\uDE89|\uD83D\uDE81|\uD83D\uDEE9|\u2708|\uD83D\uDEEB|\uD83D\uDEEC|\u26F5|\uD83D\uDEE5|\uD83D\uDEA4|\u26F4|\uD83D\uDEF3|\uD83D\uDE80|\uD83D\uDEF0|\uD83D\uDCBA|\u2693|\uD83D\uDEA7|\u26FD|\uD83D\uDE8F|\uD83D\uDEA6|\uD83D\uDEA5|\uD83C\uDFC1|\uD83D\uDEA2|\uD83C\uDFA1|\uD83C\uDFA2|\uD83C\uDFA0|\uD83C\uDFD7|\uD83C\uDF01|\uD83D\uDDFC|\uD83C\uDFED|\u26F2|\uD83C\uDF91|\u26F0|\uD83C\uDFD4|\uD83D\uDDFB|\uD83C\uDF0B|\uD83D\uDDFE|\uD83C\uDFD5|\u26FA|\uD83C\uDFDE|\uD83D\uDEE3|\uD83D\uDEE4|\uD83C\uDF05|\uD83C\uDF04|\uD83C\uDFDC|\uD83C\uDFD6|\uD83C\uDFDD|\uD83C\uDF07|\uD83C\uDF06|\uD83C\uDFD9|\uD83C\uDF03|\uD83C\uDF09|\uD83C\uDF0C|\uD83C\uDF20|\uD83C\uDF87|\uD83C\uDF86|\uD83C\uDF08|\uD83C\uDFD8|\uD83C\uDFF0|\uD83C\uDFEF|\uD83C\uDFDF|\uD83D\uDDFD|\uD83C\uDFE0|\uD83C\uDFE1|\uD83C\uDFDA|\uD83C\uDFE2|\uD83C\uDFEC|\uD83C\uDFE3|\uD83C\uDFE4|\uD83C\uDFE5|\uD83C\uDFE6|\uD83C\uDFE8|\uD83C\uDFEA|\uD83C\uDFEB|\uD83C\uDFE9|\uD83D\uDC92|\uD83C\uDFDB|\u26EA|\uD83D\uDD4C|\uD83D\uDD4D|\uD83D\uDD4B|\u26E9|\u231A|\uD83D\uDCF1|\uD83D\uDCF2|\uD83D\uDCBB|\u2328|\uD83D\uDDA5|\uD83D\uDDA8|\uD83D\uDDB1|\uD83D\uDDB2|\uD83D\uDD79|\uD83D\uDDDC|\uD83D\uDCBD|\uD83D\uDCBE|\uD83D\uDCBF|\uD83D\uDCC0|\uD83D\uDCFC|\uD83D\uDCF7|\uD83D\uDCF8|\uD83D\uDCF9|\uD83C\uDFA5|\uD83D\uDCFD|\uD83C\uDF9E|\uD83D\uDCDE|\u260E|\uD83D\uDCDF|\uD83D\uDCE0|\uD83D\uDCFA|\uD83D\uDCFB|\uD83C\uDF99|\uD83C\uDF9A|\uD83C\uDF9B|\u23F1|\u23F2|\u23F0|\uD83D\uDD70|\u23F3|\u231B|\uD83D\uDCE1|\uD83D\uDD0B|\uD83D\uDD0C|\uD83D\uDCA1|\uD83D\uDD26|\uD83D\uDD6F|\uD83D\uDDD1|\uD83D\uDEE2|\uD83D\uDCB8|\uD83D\uDCB5|\uD83D\uDCB4|\uD83D\uDCB6|\uD83D\uDCB7|\uD83D\uDCB0|\uD83D\uDCB3|\uD83D\uDC8E|\u2696|\uD83D\uDD27|\uD83D\uDD28|\u2692|\uD83D\uDEE0|\u26CF|\uD83D\uDD29|\u2699|\u26D3|\uD83D\uDD2B|\uD83D\uDCA3|\uD83D\uDD2A|\uD83D\uDDE1|\u2694|\uD83D\uDEE1|\uD83D\uDEAC|\u2620|\u26B0|\u26B1|\uD83C\uDFFA|\uD83D\uDD2E|\uD83D\uDCFF|\uD83D\uDC88|\u2697|\uD83D\uDD2D|\uD83D\uDD2C|\uD83D\uDD73|\uD83D\uDC8A|\uD83D\uDC89|\uD83C\uDF21|\uD83C\uDFF7|\uD83D\uDD16|\uD83D\uDEBD|\uD83D\uDEBF|\uD83D\uDEC1|\uD83D\uDD11|\uD83D\uDDDD|\uD83D\uDECB|\uD83D\uDECC|\uD83D\uDECF|\uD83D\uDEAA|\uD83D\uDECE|\uD83D\uDDBC|\uD83D\uDDFA|\u26F1|\uD83D\uDDFF|\uD83D\uDECD|\uD83C\uDF88|\uD83C\uDF8F|\uD83C\uDF80|\uD83C\uDF81|\uD83C\uDF8A|\uD83C\uDF89|\uD83C\uDF8E|\uD83C\uDF90|\uD83C\uDF8C|\uD83C\uDFEE|\u2709|\uD83D\uDCE9|\uD83D\uDCE8|\uD83D\uDCE7|\uD83D\uDC8C|\uD83D\uDCEE|\uD83D\uDCEA|\uD83D\uDCEB|\uD83D\uDCEC|\uD83D\uDCED|\uD83D\uDCE6|\uD83D\uDCEF|\uD83D\uDCE5|\uD83D\uDCE4|\uD83D\uDCDC|\uD83D\uDCC3|\uD83D\uDCD1|\uD83D\uDCCA|\uD83D\uDCC8|\uD83D\uDCC9|\uD83D\uDCC4|\uD83D\uDCC5|\uD83D\uDCC6|\uD83D\uDDD3|\uD83D\uDCC7|\uD83D\uDDC3|\uD83D\uDDF3|\uD83D\uDDC4|\uD83D\uDCCB|\uD83D\uDDD2|\uD83D\uDCC1|\uD83D\uDCC2|\uD83D\uDDC2|\uD83D\uDDDE|\uD83D\uDCF0|\uD83D\uDCD3|\uD83D\uDCD5|\uD83D\uDCD7|\uD83D\uDCD8|\uD83D\uDCD9|\uD83D\uDCD4|\uD83D\uDCD2|\uD83D\uDCDA|\uD83D\uDCD6|\uD83D\uDD17|\uD83D\uDCCE|\uD83D\uDD87|\u2702|\uD83D\uDCD0|\uD83D\uDCCF|\uD83D\uDCCC|\uD83D\uDCCD|\uD83D\uDEA9|\uD83C\uDFF3|\uD83C\uDFF4|\uD83D\uDD10|\uD83D\uDD12|\uD83D\uDD13|\uD83D\uDD0F|\uD83D\uDD8A|\uD83D\uDD8B|\u2712|\uD83D\uDCDD|\u270F|\uD83D\uDD8D|\uD83D\uDD8C|\uD83D\uDD0D|\uD83D\uDD0E|\u2764|\uD83D\uDC9B|\uD83D\uDC9A|\uD83D\uDC99|\uD83D\uDC9C|\uD83D\uDC94|\u2763|\uD83D\uDC95|\uD83D\uDC9E|\uD83D\uDC93|\uD83D\uDC97|\uD83D\uDC96|\uD83D\uDC98|\uD83D\uDC9D|\uD83D\uDC9F|\u262E|\u271D|\u262A|\uD83D\uDD49|\u2638|\u2721|\uD83D\uDD2F|\uD83D\uDD4E|\u262F|\u2626|\uD83D\uDED0|\u26CE|\u2648|\u2649|\u264A|\u264B|\u264C|\u264D|\u264E|\u264F|\u2650|\u2651|\u2652|\u2653|\uD83C\uDD94|\u269B|\uD83C\uDE33|\uD83C\uDE39|\u2622|\u2623|\uD83D\uDCF4|\uD83D\uDCF3|\uD83C\uDE36|\uD83C\uDE1A|\uD83C\uDE38|\uD83C\uDE3A|\uD83C\uDE37|\u2734|\uD83C\uDD9A|\uD83C\uDE51|\uD83D\uDCAE|\uD83C\uDE50|\u3299|\u3297|\uD83C\uDE34|\uD83C\uDE35|\uD83C\uDE32|\uD83C\uDD70|\uD83C\uDD71|\uD83C\uDD8E|\uD83C\uDD91|\uD83C\uDD7E|\uD83C\uDD98|\u26D4|\uD83D\uDCDB|\uD83D\uDEAB|\u274C|\u2B55|\uD83D\uDCA2|\u2668|\uD83D\uDEB7|\uD83D\uDEAF|\uD83D\uDEB3|\uD83D\uDEB1|\uD83D\uDD1E|\uD83D\uDCF5|\u2757|\u2755|\u2753|\u2754|\u203C|\u2049|\uD83D\uDCAF|\uD83D\uDD05|\uD83D\uDD06|\uD83D\uDD31|\u269C|\u303D|\u26A0|\uD83D\uDEB8|\uD83D\uDD30|\u267B|\uD83C\uDE2F|\uD83D\uDCB9|\u2747|\u2733|\u274E|\u2705|\uD83D\uDCA0|\uD83C\uDF00|\u27BF|\uD83C\uDF10|\u24C2|\uD83C\uDFE7|\uD83C\uDE02|\uD83D\uDEC2|\uD83D\uDEC3|\uD83D\uDEC4|\uD83D\uDEC5|\u267F|\uD83D\uDEAD|\uD83D\uDEBE|\uD83C\uDD7F|\uD83D\uDEB0|\uD83D\uDEB9|\uD83D\uDEBA|\uD83D\uDEBC|\uD83D\uDEBB|\uD83D\uDEAE|\uD83C\uDFA6|\uD83D\uDCF6|\uD83C\uDE01|\uD83C\uDD96|\uD83C\uDD97|\uD83C\uDD99|\uD83C\uDD92|\uD83C\uDD95|\uD83C\uDD93|\uD83D\uDD1F|\uD83D\uDD22|\u25B6|\u23F8|\u23EF|\u23F9|\u23FA|\u23ED|\u23EE|\u23E9|\u23EA|\uD83D\uDD00|\uD83D\uDD01|\uD83D\uDD02|\u25C0|\uD83D\uDD3C|\uD83D\uDD3D|\u23EB|\u23EC|\u27A1|\u2B05|\u2B06|\u2B07|\u2197|\u2198|\u2199|\u2196|\u2195|\u2194|\uD83D\uDD04|\u21AA|\u21A9|\u2934|\u2935|\u2139|\uD83D\uDD24|\uD83D\uDD21|\uD83D\uDD20|\uD83D\uDD23|\uD83C\uDFB5|\uD83C\uDFB6|\u3030|\u27B0|\u2714|\uD83D\uDD03|\u2795|\u2796|\u2797|\u2716|\uD83D\uDCB2|\uD83D\uDCB1|\u00A9|\u00AE|\u2122|\uD83D\uDD1A|\uD83D\uDD19|\uD83D\uDD1B|\uD83D\uDD1D|\uD83D\uDD1C|\u2611|\uD83D\uDD18|\u26AA|\u26AB|\uD83D\uDD34|\uD83D\uDD35|\uD83D\uDD38|\uD83D\uDD39|\uD83D\uDD36|\uD83D\uDD37|\uD83D\uDD3A|\u25AA|\u25AB|\u2B1B|\u2B1C|\uD83D\uDD3B|\u25FC|\u25FB|\u25FE|\u25FD|\uD83D\uDD32|\uD83D\uDD33|\uD83D\uDD08|\uD83D\uDD09|\uD83D\uDD0A|\uD83D\uDD07|\uD83D\uDCE3|\uD83D\uDCE2|\uD83D\uDD14|\uD83D\uDD15|\uD83C\uDCCF|\uD83C\uDC04|\u2660|\u2663|\u2665|\u2666|\uD83C\uDFB4|\uD83D\uDDE8|\uD83D\uDCAD|\uD83D\uDDEF|\uD83D\uDCAC|\uD83D\uDD50|\uD83D\uDD51|\uD83D\uDD52|\uD83D\uDD53|\uD83D\uDD54|\uD83D\uDD55|\uD83D\uDD56|\uD83D\uDD57|\uD83D\uDD58|\uD83D\uDD59|\uD83D\uDD5A|\uD83D\uDD5B|\uD83D\uDD5C|\uD83D\uDD5D|\uD83D\uDD5E|\uD83D\uDD5F|\uD83D\uDD60|\uD83D\uDD61|\uD83D\uDD62|\uD83D\uDD63|\uD83D\uDD64|\uD83D\uDD65|\uD83D\uDD66|\uD83D\uDD67|\uD83C\uDDE6\uD83C\uDDEB|\uD83C\uDDE6\uD83C\uDDFD|\uD83C\uDDE6\uD83C\uDDF1|\uD83C\uDDE9\uD83C\uDDFF|\uD83C\uDDE6\uD83C\uDDF8|\uD83C\uDDE6\uD83C\uDDE9|\uD83C\uDDE6\uD83C\uDDF4|\uD83C\uDDE6\uD83C\uDDEE|\uD83C\uDDE6\uD83C\uDDF6|\uD83C\uDDE6\uD83C\uDDEC|\uD83C\uDDE6\uD83C\uDDF7|\uD83C\uDDE6\uD83C\uDDF2|\uD83C\uDDE6\uD83C\uDDFC|\uD83C\uDDE6\uD83C\uDDFA|\uD83C\uDDE6\uD83C\uDDF9|\uD83C\uDDE6\uD83C\uDDFF|\uD83C\uDDE7\uD83C\uDDF8|\uD83C\uDDE7\uD83C\uDDED|\uD83C\uDDE7\uD83C\uDDE9|\uD83C\uDDE7\uD83C\uDDE7|\uD83C\uDDE7\uD83C\uDDFE|\uD83C\uDDE7\uD83C\uDDEA|\uD83C\uDDE7\uD83C\uDDFF|\uD83C\uDDE7\uD83C\uDDEF|\uD83C\uDDE7\uD83C\uDDF2|\uD83C\uDDE7\uD83C\uDDF9|\uD83C\uDDE7\uD83C\uDDF4|\uD83C\uDDE7\uD83C\uDDF6|\uD83C\uDDE7\uD83C\uDDE6|\uD83C\uDDE7\uD83C\uDDFC|\uD83C\uDDE7\uD83C\uDDF7|\uD83C\uDDEE\uD83C\uDDF4|\uD83C\uDDFB\uD83C\uDDEC|\uD83C\uDDE7\uD83C\uDDF3|\uD83C\uDDE7\uD83C\uDDEC|\uD83C\uDDE7\uD83C\uDDEB|\uD83C\uDDE7\uD83C\uDDEE|\uD83C\uDDE8\uD83C\uDDFB|\uD83C\uDDF0\uD83C\uDDED|\uD83C\uDDE8\uD83C\uDDF2|\uD83C\uDDE8\uD83C\uDDE6|\uD83C\uDDEE\uD83C\uDDE8|\uD83C\uDDF0\uD83C\uDDFE|\uD83C\uDDE8\uD83C\uDDEB|\uD83C\uDDF9\uD83C\uDDE9|\uD83C\uDDE8\uD83C\uDDF1|\uD83C\uDDE8\uD83C\uDDF3|\uD83C\uDDE8\uD83C\uDDFD|\uD83C\uDDE8\uD83C\uDDE8|\uD83C\uDDE8\uD83C\uDDF4|\uD83C\uDDF0\uD83C\uDDF2|\uD83C\uDDE8\uD83C\uDDEC|\uD83C\uDDE8\uD83C\uDDE9|\uD83C\uDDE8\uD83C\uDDF0|\uD83C\uDDE8\uD83C\uDDF7|\uD83C\uDDED\uD83C\uDDF7|\uD83C\uDDE8\uD83C\uDDFA|\uD83C\uDDE8\uD83C\uDDFC|\uD83C\uDDE8\uD83C\uDDFE|\uD83C\uDDE8\uD83C\uDDFF|\uD83C\uDDE9\uD83C\uDDF0|\uD83C\uDDE9\uD83C\uDDEF|\uD83C\uDDE9\uD83C\uDDF2|\uD83C\uDDE9\uD83C\uDDF4|\uD83C\uDDEA\uD83C\uDDE8|\uD83C\uDDEA\uD83C\uDDEC|\uD83C\uDDF8\uD83C\uDDFB|\uD83C\uDDEC\uD83C\uDDF6|\uD83C\uDDEA\uD83C\uDDF7|\uD83C\uDDEA\uD83C\uDDEA|\uD83C\uDDEA\uD83C\uDDF9|\uD83C\uDDEA\uD83C\uDDFA|\uD83C\uDDEB\uD83C\uDDF0|\uD83C\uDDEB\uD83C\uDDF4|\uD83C\uDDEB\uD83C\uDDEF|\uD83C\uDDEB\uD83C\uDDEE|\uD83C\uDDEB\uD83C\uDDF7|\uD83C\uDDEC\uD83C\uDDEB|\uD83C\uDDF5\uD83C\uDDEB|\uD83C\uDDF9\uD83C\uDDEB|\uD83C\uDDEC\uD83C\uDDE6|\uD83C\uDDEC\uD83C\uDDF2|\uD83C\uDDEC\uD83C\uDDEA|\uD83C\uDDE9\uD83C\uDDEA|\uD83C\uDDEC\uD83C\uDDED|\uD83C\uDDEC\uD83C\uDDEE|\uD83C\uDDEC\uD83C\uDDF7|\uD83C\uDDEC\uD83C\uDDF1|\uD83C\uDDEC\uD83C\uDDE9|\uD83C\uDDEC\uD83C\uDDF5|\uD83C\uDDEC\uD83C\uDDFA|\uD83C\uDDEC\uD83C\uDDF9|\uD83C\uDDEC\uD83C\uDDEC|\uD83C\uDDEC\uD83C\uDDF3|\uD83C\uDDEC\uD83C\uDDFC|\uD83C\uDDEC\uD83C\uDDFE|\uD83C\uDDED\uD83C\uDDF9|\uD83C\uDDED\uD83C\uDDF3|\uD83C\uDDED\uD83C\uDDF0|\uD83C\uDDED\uD83C\uDDFA|\uD83C\uDDEE\uD83C\uDDF8|\uD83C\uDDEE\uD83C\uDDF3|\uD83C\uDDEE\uD83C\uDDE9|\uD83C\uDDEE\uD83C\uDDF7|\uD83C\uDDEE\uD83C\uDDF6|\uD83C\uDDEE\uD83C\uDDEA|\uD83C\uDDEE\uD83C\uDDF2|\uD83C\uDDEE\uD83C\uDDF1|\uD83C\uDDEE\uD83C\uDDF9|\uD83C\uDDE8\uD83C\uDDEE|\uD83C\uDDEF\uD83C\uDDF2|\uD83C\uDDEF\uD83C\uDDF5|\uD83C\uDDEF\uD83C\uDDEA|\uD83C\uDDEF\uD83C\uDDF4|\uD83C\uDDF0\uD83C\uDDFF|\uD83C\uDDF0\uD83C\uDDEA|\uD83C\uDDF0\uD83C\uDDEE|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF0\uD83C\uDDFC|\uD83C\uDDF0\uD83C\uDDEC|\uD83C\uDDF1\uD83C\uDDE6|\uD83C\uDDF1\uD83C\uDDFB|\uD83C\uDDF1\uD83C\uDDE7|\uD83C\uDDF1\uD83C\uDDF8|\uD83C\uDDF1\uD83C\uDDF7|\uD83C\uDDF1\uD83C\uDDFE|\uD83C\uDDF1\uD83C\uDDEE|\uD83C\uDDF1\uD83C\uDDF9|\uD83C\uDDF1\uD83C\uDDFA|\uD83C\uDDF2\uD83C\uDDF4|\uD83C\uDDF2\uD83C\uDDF0|\uD83C\uDDF2\uD83C\uDDEC|\uD83C\uDDF2\uD83C\uDDFC|\uD83C\uDDF2\uD83C\uDDFE|\uD83C\uDDF2\uD83C\uDDFB|\uD83C\uDDF2\uD83C\uDDF1|\uD83C\uDDF2\uD83C\uDDF9|\uD83C\uDDF2\uD83C\uDDED|\uD83C\uDDF2\uD83C\uDDF6|\uD83C\uDDF2\uD83C\uDDF7|\uD83C\uDDF2\uD83C\uDDFA|\uD83C\uDDFE\uD83C\uDDF9|\uD83C\uDDF2\uD83C\uDDFD|\uD83C\uDDEB\uD83C\uDDF2|\uD83C\uDDF2\uD83C\uDDE9|\uD83C\uDDF2\uD83C\uDDE8|\uD83C\uDDF2\uD83C\uDDF3|\uD83C\uDDF2\uD83C\uDDEA|\uD83C\uDDF2\uD83C\uDDF8|\uD83C\uDDF2\uD83C\uDDE6|\uD83C\uDDF2\uD83C\uDDFF|\uD83C\uDDF2\uD83C\uDDF2|\uD83C\uDDF3\uD83C\uDDE6|\uD83C\uDDF3\uD83C\uDDF7|\uD83C\uDDF3\uD83C\uDDF5|\uD83C\uDDF3\uD83C\uDDF1|\uD83C\uDDF3\uD83C\uDDE8|\uD83C\uDDF3\uD83C\uDDFF|\uD83C\uDDF3\uD83C\uDDEE|\uD83C\uDDF3\uD83C\uDDEA|\uD83C\uDDF3\uD83C\uDDEC|\uD83C\uDDF3\uD83C\uDDFA|\uD83C\uDDF3\uD83C\uDDEB|\uD83C\uDDF2\uD83C\uDDF5|\uD83C\uDDF0\uD83C\uDDF5|\uD83C\uDDF3\uD83C\uDDF4|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF5\uD83C\uDDF0|\uD83C\uDDF5\uD83C\uDDFC|\uD83C\uDDF5\uD83C\uDDF8|\uD83C\uDDF5\uD83C\uDDE6|\uD83C\uDDF5\uD83C\uDDEC|\uD83C\uDDF5\uD83C\uDDFE|\uD83C\uDDF5\uD83C\uDDEA|\uD83C\uDDF5\uD83C\uDDED|\uD83C\uDDF5\uD83C\uDDF3|\uD83C\uDDF5\uD83C\uDDF1|\uD83C\uDDF5\uD83C\uDDF9|\uD83C\uDDF5\uD83C\uDDF7|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF7\uD83C\uDDEA|\uD83C\uDDF7\uD83C\uDDF4|\uD83C\uDDF7\uD83C\uDDFA|\uD83C\uDDF7\uD83C\uDDFC|\uD83C\uDDE7\uD83C\uDDF1|\uD83C\uDDF8\uD83C\uDDED|\uD83C\uDDF0\uD83C\uDDF3|\uD83C\uDDF1\uD83C\uDDE8|\uD83C\uDDF5\uD83C\uDDF2|\uD83C\uDDFB\uD83C\uDDE8|\uD83C\uDDFC\uD83C\uDDF8|\uD83C\uDDF8\uD83C\uDDF2|\uD83C\uDDF8\uD83C\uDDF9|\uD83C\uDDF8\uD83C\uDDE6|\uD83C\uDDF8\uD83C\uDDF3|\uD83C\uDDF7\uD83C\uDDF8|\uD83C\uDDF8\uD83C\uDDE8|\uD83C\uDDF8\uD83C\uDDF1|\uD83C\uDDF8\uD83C\uDDEC|\uD83C\uDDF8\uD83C\uDDFD|\uD83C\uDDF8\uD83C\uDDF0|\uD83C\uDDF8\uD83C\uDDEE|\uD83C\uDDF8\uD83C\uDDE7|\uD83C\uDDF8\uD83C\uDDF4|\uD83C\uDDFF\uD83C\uDDE6|\uD83C\uDDEC\uD83C\uDDF8|\uD83C\uDDF0\uD83C\uDDF7|\uD83C\uDDF8\uD83C\uDDF8|\uD83C\uDDEA\uD83C\uDDF8|\uD83C\uDDF1\uD83C\uDDF0|\uD83C\uDDF8\uD83C\uDDE9|\uD83C\uDDF8\uD83C\uDDF7|\uD83C\uDDF8\uD83C\uDDFF|\uD83C\uDDF8\uD83C\uDDEA|\uD83C\uDDE8\uD83C\uDDED|\uD83C\uDDF8\uD83C\uDDFE|\uD83C\uDDF9\uD83C\uDDFC|\uD83C\uDDF9\uD83C\uDDEF|\uD83C\uDDF9\uD83C\uDDFF|\uD83C\uDDF9\uD83C\uDDED|\uD83C\uDDF9\uD83C\uDDF1|\uD83C\uDDF9\uD83C\uDDEC|\uD83C\uDDF9\uD83C\uDDF0|\uD83C\uDDF9\uD83C\uDDF4|\uD83C\uDDF9\uD83C\uDDF9|\uD83C\uDDF9\uD83C\uDDF3|\uD83C\uDDF9\uD83C\uDDF7|\uD83C\uDDF9\uD83C\uDDF2|\uD83C\uDDF9\uD83C\uDDE8|\uD83C\uDDF9\uD83C\uDDFB|\uD83C\uDDFA\uD83C\uDDEC|\uD83C\uDDFA\uD83C\uDDE6|\uD83C\uDDE6\uD83C\uDDEA|\uD83C\uDDEC\uD83C\uDDE7|\uD83C\uDDFA\uD83C\uDDF8|\uD83C\uDDFB\uD83C\uDDEE|\uD83C\uDDFA\uD83C\uDDFE|\uD83C\uDDFA\uD83C\uDDFF|\uD83C\uDDFB\uD83C\uDDFA|\uD83C\uDDFB\uD83C\uDDE6|\uD83C\uDDFB\uD83C\uDDEA|\uD83C\uDDFB\uD83C\uDDF3|\uD83C\uDDFC\uD83C\uDDEB|\uD83C\uDDEA\uD83C\uDDED|\uD83C\uDDFE\uD83C\uDDEA|\uD83C\uDDFF\uD83C\uDDF2|\uD83C\uDDFF\uD83C\uDDFC)|([^\u]\u20E3)([\uFE0E\uFE0F]?)))/g,
        rescaper = /[&<>'"]/g,
        shouldntBeParsed = /IFRAME|NOFRAMES|NOSCRIPT|SCRIPT|SELECT|STYLE|TEXTAREA|[a-z]/,
        fromCharCode = String.fromCharCode;
    return twemoji;

    function createText(text) {
        return document.createTextNode(text)
    }

    function escapeHTML(s) {
        return s.replace(rescaper, replacer)
    }

    function defaultImageSrcGenerator(icon, options) {
        return "".concat(options.base, options.size, "/", icon, options.ext)
    }

    function grabAllTextNodes(node, allText) {
        var childNodes = node.childNodes,
            length = childNodes.length,
            subnode, nodeType;
        while (length--) {
            subnode = childNodes[length];
            nodeType = subnode.nodeType;
            if (nodeType === 3) {
                allText.push(subnode)
            } else if (nodeType === 1 && !shouldntBeParsed.test(subnode.nodeName)) {
                grabAllTextNodes(subnode, allText)
            }
        }
        return allText
    }

    function grabTheRightIcon(icon, variant) {
        return toCodePoint(variant === "️" ? icon.slice(0, -1) : icon.length === 3 && icon.charAt(1) === "️" ? icon.charAt(0) + icon.charAt(2) : icon)
    }

    function parseNode(node, options) {
        var allText = grabAllTextNodes(node, []),
            length = allText.length,
            attrib, attrname, modified, fragment, subnode, text, match, i, index, img, alt, icon, variant, src;
        while (length--) {
            modified = false;
            fragment = document.createDocumentFragment();
            subnode = allText[length];
            text = subnode.nodeValue;
            i = 0;
            while (match = re.exec(text)) {
                index = match.index;
                if (index !== i) {
                    fragment.appendChild(createText(text.slice(i, index)))
                }
                alt = match[0];
                icon = match[1];
                variant = match[2];
                i = index + alt.length;
                if (variant !== "︎") {
                    src = options.callback(grabTheRightIcon(icon, variant), options, variant);
                    if (src) {
                        img = new Image;
                        img.onerror = options.onerror;
                        attrib = options.attributes(icon, variant);
                        for (attrname in attrib) {
                            if (attrib.hasOwnProperty(attrname) && attrname.indexOf("on") !== 0 && !img.hasAttribute(attrname)) {
                                img.setAttribute(attrname, attrib[attrname])
                            }
                        }
                        img.className = options.className;
                        img.alt = alt;
                        img.src = src;
                        modified = true;
                        fragment.appendChild(img)
                    }
                }
                if (!img) fragment.appendChild(createText(alt));
                img = null
            }
            if (modified) {
                if (i < text.length) {
                    fragment.appendChild(createText(text.slice(i)))
                }
                subnode.parentNode.replaceChild(fragment, subnode)
            }
        }
        return node
    }

    function parseString(str, options) {
        return replace(str, function(match, icon, variant) {
            var ret = match,
                attrib, attrname, src;
            if (variant !== "︎") {
                src = options.callback(grabTheRightIcon(icon, variant), options, variant);
                if (src) {
                    ret = "<div class='emojicon'><img ".concat('class="', options.className, '" ', 'alt="', match, '"', ' src="', src, '"');
                    attrib = options.attributes(icon, variant);
                    for (attrname in attrib) {
                        if (attrib.hasOwnProperty(attrname) && attrname.indexOf("on") !== 0 && ret.indexOf(" " + attrname + "=") === -1) {
                            ret = ret.concat(" ", attrname, '="', escapeHTML(attrib[attrname]), '"')
                        }
                    }
                    ret = ret.concat("></div>")
                }
            }
            return ret
        })
    }

    function replacer(m) {
        return escaper[m]
    }

    function returnNull() {
        return null
    }

    function toSizeSquaredAsset(value) {
        return typeof value === "number" ? value + "x" + value : value
    }

    function fromCodePoint(codepoint) {
        var code = typeof codepoint === "string" ? parseInt(codepoint, 16) : codepoint;
        if (code < 65536) {
            return fromCharCode(code)
        }
        code -= 65536;
        return fromCharCode(55296 + (code >> 10), 56320 + (code & 1023))
    }

    function parse(what, how) {
        if (!how || typeof how === "function") {
            how = {
                callback: how
            }
        }
        return (typeof what === "string" ? parseString : parseNode)(what, {
            callback: how.callback || defaultImageSrcGenerator,
            attributes: typeof how.attributes === "function" ? how.attributes : returnNull,
            base: typeof how.base === "string" ? how.base : twemoji.base,
            ext: how.ext || twemoji.ext,
            size: how.folder || toSizeSquaredAsset(how.size || twemoji.size),
            className: how.className || twemoji.className,
            onerror: how.onerror || twemoji.onerror
        })
    }

    function replace(text, callback) {
        return String(text).replace(re, callback)
    }

    function test(text) {
        re.lastIndex = 0;
        var result = re.test(text);
        re.lastIndex = 0;
        return result
    }

    function toCodePoint(unicodeSurrogates, sep) {
        var r = [],
            c = 0,
            p = 0,
            i = 0;
        while (i < unicodeSurrogates.length) {
            c = unicodeSurrogates.charCodeAt(i++);
            if (p) {
                r.push((65536 + (p - 55296 << 10) + (c - 56320)).toString(16));
                p = 0
            } else if (55296 <= c && c <= 56319) {
                p = c
            } else {
                r.push(c.toString(16))
            }
        }
        return r.join(sep || "-")
    }
}();

$(document).ready(function() {
    function convert() {
        document.body.innerHTML = twemoji.parse(document.body.innerHTML);
    }
    convert();

    $(document).delegate('.emoji-header button', 'click', function() {
        index = $(this).index()
        $('.emoji-panel').css({
            'transform': 'translateX(-' + index + '00%)'
        });
    });

    $('.emoji-panel .emojicon').on('click', function() {
        // $('#input_chat').append($('img', this).clone());
        $('#input_chat').append($(this).children("img").attr("alt"));
    });
});
