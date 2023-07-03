"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[115],{

/***/ 66730:
/*!************************************************!*\
  !*** ./src/pages/linkme/index.tsx + 4 modules ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ linkme; }
});

// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 13 modules
var _umi_production_exports = __webpack_require__(310);
;// CONCATENATED MODULE: ./src/pages/linkme/index.css?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var linkmemodules = ({"box":"box___SDLEI","title":"title___QcvPL","icons":"icons___x6J_g","icon":"icon___qXHsm","iconTitle":"iconTitle___qbSiT","iconBorder":"iconBorder___lnNSh"});
;// CONCATENATED MODULE: ./src/assets/email.png
var email_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAACzBJREFUeF7tnVF22zgMRU3tQvZPZyVNVtJ2JU1X0sxKxl1JPR+2d2HOYUc+o3piR4IAShBufiMKxAOuSUC0nDb8oQAK3FUgoQ0KoMB9BQCE7ECBBwoACOmBAgBCDqCATAFWEJlujAqiAIAECTRuyhQAEJlujAqiAIAECTRuyhQAEJlujAqiAIAECTRuyhQAEJlujAqiAIAECTRuyhQAEJlujAqiAIAECTRuyhQAEJlujAqiAIAECTRuyhQAEJlujAqiAIAECTRuyhQAEJlujAqiAIAECTRuyhQAEJlujAqiAIAECTRuyhQAEJlujAqiAIAECTRuyhQAEJlujAqiAIAECTRuyhQAEJlujAqiAIAECTRuyhQAEJlujAqiAIAECTRuyhQAEJlujAqiAIAECTRuyhSYDZDz+fy5TPlyuXyUTZ1RQRQ4NE3zY7PZHNq2PdT2uSogBYqc86fNZvNU21HsrUKBfUrpW9u2+1reVAHkfD4/5Zy/AkatsK7eTjVQzAE5Ho9fU0ovqw8ZDlZXIOf8stvtvlkaNgXkdDr9xaphGT7ubQ2JGSCsHCRvLQUsITEBpKs5yurBHwpUUSCl9GxRvKsDcj6fP+Scf1ZRBSMo8J8Chw4S1VawOiBsrcjZuRSw2GqpA3I6ncrq8WEukbAbW4Htdqua06o3o/aInZxL8D6l9IfmE3dVQNheLSFFYs8hpfSlbdtXLRW0AfmeUvp1xoo/FJhDgZzz6263+6JlWxUQHgxqhYX7TFBgv91unyeM/22oNiB54sQOOedqB9EmzpXhBgqklMpB1klNHs1CfWmAbCxadQZx5JYGCmjVsKsGpOheIGma5k/NboRBPLmlogKa2/PVA9LpXo40l46E6pNRxZhyKwUFupMX3zUPtUYBpMhvcnxAIa7cQkEBCzjKtJYMiMlTdKuDaAox5hZCBQwfKi+3i1W0Oh6PJs9CtB8ACePKMAUFvMBRXFXtYl210+pG3MaCDpdCds58C2+5YQJIt5KUr9qWp+qTetpvQPLaNE354j7F+8zJPta8Zqeqb9tyC24GSHGgW0pLh0IVks1mQ4drbHbOeL1VMd41cUqn0+zhsikgHSTlC1Tl24XakNDhmjHph5ru4HAbf3NArkJ6XF6HJgHXva2Ap2L8XgyrAWLZ4aJ4Xx6i3UsCy/Za9U/7tO57k6sKiHHxzvGU96Jd6f9ravVXB6SrS8orSMubFlXrkvLpQoerEgV3zKxtKz0LIHS45k1iC+ueO1WP9JgNEDpcFmk6zz3XUIwvoki/N4k17VnnSdH5rK4ZjqLqrCtIP6zejiDMl5LLsRwhZosBhA7XchJ/yEwMi3HVt5IM8WWxNchbE+N4ytSQ2o83hMPk/bpTFFnUCnJ1xBASjqdMyJa1dqqqrSBFQK1Ttt7P8EzIw0UO9VKMl3lqHl5UXUFOp1PW/mITHa75efEERzkYu+Sv3P56L5b22agI3ZL5MXh7Bl60789z8YBcIdF8dU8ngMUXsDjDdYdOL8X47TxdANJprvrFJsPiXXWeS10NxszLKxzFR0+AlPmqdo4o3sek+fhrvXSqHs3TGyBAMj5PZxnhrRi/J5JHQH75QodrlrwfZHQtcHjcYv0WIDpcg/K16kUeO1WPBHK7glyd0n45NR0uOU+ei/HVbbFuHFLtHNHhGgeJYTFettJqZ6ok83S/gvRCSYdrXF6rXC1JuoGGSzzV3lMl/dBbEyDX4l3tE6fc0OqnqDU/GQcmnPpljorx8j618jL00X9rBET9OwCc4fp/XnmBo8x8ymuDAGTgZ4qX7sxAdyZd5k0LAOmFW/v5SD+TDDtcbl4x5KVT1Y8bgFQCpFuun3LO4V6i7aUYf2tpBJCKgHSQhHqJtvczawBSGZCrOY/bjbHFh6di/J5vADITIMWsVYdL+xjNWDCmdn8e2av90mgAmRGQDhKrX8Ca7QtYVuBbNlFYQQZ8DM4RgN6n7Speor22rSMryMwryNW89DjDAO5Vz5o9+KQtzYfSoXsaMKcxl6geGxljeOpWkQeFY9V+53qvHZ81FONssQYk81xbrNupedrDrxkOVpCbzFwKIL3i/WUA16Mu0exweTs2Mkqo7mJqkIXUIG8Fz/B4yuQOl2Exrn5gVAJGrzYsv0Im+o1DapApyg8cu8Ti3RAO1a8bDJT44WWsIAteQSp0uEZ9UczzmSopLADiAJCuWJz1DNfai3G6WAM+QpZUpN+b7hwdrqhw0MVacBfrEc81u0c1bQ34DKt+CVssJ1usN56VmJ/hilSMs8Ua8NnjYYvVd8Oyw9XZ0T42ovoqngEhnXwJK4jTFaTX4bIq3icn180NZj1TJXUGQJwDYtzhkubV7bj9drt91rpZzfsAyAoAubpg1eGamJBu4aCL5bSLNUeHSwKJ5rkviX2NMawgK1pBeiuJSYdrTMKt4e2PrCArXEF6xbvVK4be5WQtcADIigGZqXh32al6RDxbrBVusW4DbvUS7Rs7rovxe5AASABAiovGHa5VwsEWa+VbrNtPRYtzVWvoVLHFeres/PcCb0dNBrr122XdlkHlFUNrKsbZYg3IpgiAdNuG0uEqkEjPWlV5ldCAkJlfQg0SpAZ5K5O64H8aAUoB41vbtnvzzFyIAQAJDEj/mcnlcvmYUioryoeeJIec86Fpmh+bzWbftu1hIXlbbRoAAiDVks2jIQABEI95W23OAAIg1ZLNoyEAARCPeVttzgACINWSzaMhAAEQj3lbbc4AAiDVks2jIQABEI95W23OAAIg1ZLNoyEAARCPeVttzgACINWSzaMhAAEQj3lbbc4AAiDVks2jIQABEI95W23OAAIg1ZLNoyEAARCPeVttzgACINWSzaMhAAEQj3lbbc4AAiDVks2jIQABEI95W23OAAIg1ZLNoyEAARCPeVttzgACINWSzaMhAAEQj3lbbc4AAiDVks2jIQABEI95W23OAAIg1ZLNoyEAARCPeVttzgACINWSzaMhAAEQj3lbbc4AAiDVks2jIQABEI95W23OAAIg1ZLNoyEAARCPeVttzgACINWSzaOhtQLy8+a39obGZl9+k2/oxVy3fgVSSuU3GyW/BnzYbrd/aCmUtG5U7nM6naSAaE6De8VWYNGA/CWkPnZI8V5Tgf12u33WuqHqCnI8Hr+nlD5rTY77oMBYBXLOL7vd7tvYcfeuVwXkfD4/5ZzLKsIfCsyiQErpuW3bvZZxVUCoQ7TCwn2ECqjWH2UO6oAcj8evKaUXoYMMQwGxAtrbKxNAWEXE8WXgNAXUVw8zQFhFpkWa0eMVSCl9adv2dfzIxyPUt1hXc0CiHSrud0+BnPPrbrf7YqGQGSBlsrR9LULGPW8UUH3ucauuKSAdJBTt5LSJAhZFeXVAisHu+ch34TktE3G5qWsFDl3Nofa8454a5itI33B3QvMTx1FcJ+dsky+1RtM0PyyK8UUAcgPL0+Vy+ciqMlu+eTF8aJrm781ms2/btvqJ76oriJeIME8UuCoAIOQCCjxQAEBIDxQAEHIABWQKsILIdGNUEAUAJEigcVOmAIDIdGNUEAUAJEigcVOmAIDIdGNUEAUAJEigcVOmAIDIdGNUEAUAJEigcVOmAIDIdGNUEAUAJEigcVOmAIDIdGNUEAUAJEigcVOmAIDIdGNUEAUAJEigcVOmAIDIdGNUEAUAJEigcVOmAIDIdGNUEAUAJEigcVOmAIDIdGNUEAUAJEigcVOmAIDIdGNUEAUAJEigcVOmAIDIdGNUEAUAJEigcVOmAIDIdGNUEAUAJEigcVOmAIDIdGNUEAUAJEigcVOmAIDIdGNUEAX+AS/5e0Gs7JRbAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/assets/instagram.png
var instagram_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAEQ9JREFUeF7tnVt2GzkOhlXaheSHdlaS9EqSrCTOSpJeybhXMs6DrV2o5lCH9FBlXUjcCLJ+v3THruIFxEcAJIqcNviBBCCBqxKYIBtIABK4LgEAAu2ABG5IAIBAPSABAAIdgARoEoAFockNb61EAgBkJQONbtIkAEBocsNbK5EAAFnJQKObNAkAEJrc8NZKJABAVjLQ6CZNAgCEJje8tRIJAJCVDDS6SZMAAKHJDW+tRAIAZCUDjW7SJABAaHLDWyuRAABZyUCjmzQJABCa3PDWSiQAQFYy0OgmTQIAhCY3vLUSCQCQlQw0ukmTAAChyU38rcPh8JgXutvtXsQrQYHVElgtIFEhk1I+Ho/Hv6L0zhR1mqazf282m3v/rh4ExRcuQXb2u3meLz6z3W7/xHaFv7+sFdjhAQkgHI/Hr2Gwp2n6EhV8qeSKOjpU0SdYAlTb7fbfCM7zUD1cdGY4QBIQEYYABH50JZCgeQ7Q7Ha7oYAZApAMim8XXCBd9UDpSwkECxNg+WcEWLoG5PX19cc0TYDCL6QBlt8PDw8//Tbxdsu6BCSC8dSr0FfY7m5B6QoQWIzu0eoOlC4ACTHGPM+/NpsNgu7uGTl14GWapr97WDp2DwjcqTGIuNCLLqyJW0BgNYYF48Oql2dr4hKQCMd/V6Mi6Ghwub57XBZ2B8jhcPgyz/N/oDOrk4BLl8sVIIBjdVBc2mR0tW/iBpBO4egl47ar3LN5np+8bC66AKQhHEnBTwl4YfkxTGkxkzVX/qGyWRep9e8ZzaHvx+Pxc/hvlsXcYmk9xCQ/d7vd79Y2tTkghnCcfNwIwHBJdZqKlH0aEDKjP0d4tMFxEbg3BUR5teodCC/mWlOJrcuO0HyJwIR8OI2f5huKTQF5e3sLq1XSM5Eb86yhMV7LPBwO3+Z5Dt/diI/nfr//1KrfzQBR2CEHGK20KKtXA5SWQXsTQITjDpfr5w50tWkTIig/hL7PaRaPNAFE0LVqJrim2tdJ5THGDG60xDLzSwtXyxyQOLOEzFzuz/N+v/+bWwje15VA9rUn+/udmI5iuvRrDsjb21vIsWLNKC19Ul11GrN0QUjMrYgpIBLWA3D0C5HEwkz8hPe7lRRMARGwHnCrrDRDoR6hTxhMrYgZIALWw1QwCvqBIjebjUTgbhmLmAHCXbmKH9UMdebSWokRgMRssjQBhLvvYTljrFVp7/U7xA/hmexAvnT+FemERa5HYTVhmgDy+vr6K55fdW8cLv0dcQdFakLvxMktLMvfWnms3qzlxiNWwboJIJzg3GqmENKnoYohrDpVJRcyPQsTN8sKkJmoObAeRMFxXyPAkaqsUlxObGoxeaoDwvE1LQTAVaQR3+d+hlDj/nCsiMWemDognPhjv9+rt29EBef2iTOrx7qrcuQYLri6h6GugNTO18xCXIXA++cSeHt7o7rE7wXVzO4MIKvcOco4WwBCEjaWdinDyX+H4xIvai+e3TlulrYbrgoIR9hwr/jKTimBEZwvqyue3Tkxj/ZEqgoII/4onn0oSoB3rkuAMWYfCq2Z5KhulrYr7hIQ7U4DkJuAhEuJ2N9ubDabqkmOAWZVPbVjrwoINUDXNpu1QpJ6fnF8zulW3Zi6Ef43P+zgw3ld2Vldqmd0ceKBXE61kxzDtSt25SjjqA3I6gN0pfsTT6kdGpdmcuKBXAFrJzkOmDWuXC0kXgH51MPlKteELfgFXcl4il+ayZjNU3urZ3UOmJorWWqAeJ0RSjSO+oyAYlGrfldMiUszuYmEVIWl7r9Q6ysRtiYg4SAxyuEMqkFXiVBqnxE+4qa2+kvPV2fXLguhzui1sUdeL3Ulq9adqxGwO0A4Aq7puMSzhangElVRy6hK+bgCSfGxPTW755c6BEAKhrkHQLguSIEYpB+pSkPPKy+Mp1ggpvqoS71cMG8JW82CUP1xzc5KaB0ntpKon1EGy+1anvAeroqQXkXzqDOagJC+ItT0JxnKdXqVOoDceiXf9zwBUeWr6XUAkELto/rHhcWbPqapUJyOUK2zZn88AhIumHdzekmH8UapjpLjktIKap8DIAUS01zTLqj+7BHqgNXW0/B5keBaqv0MeattDXi0IC520an7AFLKYliOG0vCkHl/gFB99mmaXABCbb+hYktWVZ0aIll5KguAFEjVAyAGcOQXiv6Jt+u+Z+nmS6pBZPEewJDtyzoV/5b4NQPdgmE/PQJACiSlmZlZUL3mUi47AzfbtAuwSN8FuPGwBEzMx1qPi9USEEaQeIs9lUBYa3WtNSREQNRcRLUgnfqxVCtAFOAwuVRUIVFSBegS6x2eASB3JNUKEMm4w3oWLsyXKtXR8Jyay3KvEQDktoTUTOWtagWtR9PZV+BagXcxtdqPInoeanrjzcVS6+gtQISsh4v9BEFIWo0F6Q5LLc9DExDK9+jmg8I5uyuDrplLcgn86HKF00m+3XNpbv29ReIo0YJsAAhnpG+8Sx2QrEhzqEtEIbTKZd436ngAkBKtqHxGwHq4cKuudVvC3bK2IgDEUZBOHYzUhVaBbM08wNidTtWYWhHqmMCC1GhFwbNc62E9sxZ06eojAn01+wQBgDixINTvn2PzTWdVDhzhXW48YpmnRQVEK4dvtatY1IEICteDa7WEirnXYzYhUMcFgHCn0ex9prK4WtKtEQtnv8dqUgAgDlws6uEAvVqPJHLOxGCVPgNAHABCHYSWOUo1luLWswwrYuJmUccGLpaUhtAzRsP3Er8fHh6+CzbFvCjv1hOANLYgnCVPrVnKkhLOvohFHAJAOgZEazPKEpBQF9XNstj7ASCNAaG6GCO4V0n0DBk8PTw8/NQEGoC0B2S4I1FrFZYBiHoMBkAASK0+iz/PWO5V3wMCII0B8TYA4tpfUCADEPWlXm/js7pUE28DUKDP4o8wVrIAiNRoePv4PvWL2C61L9ak5F1bjlc5eJvA1mhBKJ8CA5BIoPZSNwBBDFI72Ys/z3Cx1CcKANIekHApZfWxnRa7yOIkXCmQEaRjFUtqkIg+rkUQCEAOB9IV3RabpbAgjS0I9UtCq3RvqQnqVjnUfDQAIjg6Xi2I511kQfHfLMrzJAEL0tiCUGfPcIfHfr//ZKXEmvUwlPD7brf77bRtKhcvrW6ZlxGgdvkt+lKZGRNE6D8AkZodvLpYnCXOEeIQqnsV9MLiexiGdYMFEYSXtJI1gptFVUCrz42p7dOCd3UuVoCMGqjHWdTsEDWpCSGVw3EvrawnAGkcpIfqOW6W1UwqDUcoj/oloZV7FdtIuv4AFkRYY5jK0p0V4QTnQfTaOVhpeGFBHFgQrpvVYyzCmRAsNggBSJkFMNtr4PjjoStWPnmZ2G4/xbUelnlosCBOLIjA3RlN7yMsBYc7EVi6V4hB7o+qmQWJwTopaS/rRg8X6ISgl/xjsTmYN45qQbRipFUu82bLno/zPP+ipL/nkHhNQeHEHbF/phMWx4IAEPIcqOufx3hE/Tic2u4LwNEktWZNFoSynm0+Y8VZi7qznuutC3eLe1lO1iH1j6MuQQ9AnATpeTMkAtnkkkSf/bl2xpd4XrAfTazH2lwsigUx25BaKqSES5IgifsGqkd0LtvPSZ+5AGcT6xEBoRyqoeZ5aAbpXQHCTD+5ZACCy/VT+/uJaDXCQsOjhBUKZVjue1yYqFYDCMmv11qNKFEe7obalTpU9ksEY42zZreEY20WpDtAwgAJuypnQXxwvbbb7b+73Y4UowQojsfj12mavklajNRID9kBxO+I1FxCTReLBIhWVmaJBUnPcD4qKqznZZ7n5wBLiltCftdut3sJ/w4gxN9/OR6Pf0W356mwbOpjakpW2iCGm6vWdgByYfS03JdSRWnwnFqQW9MXAFIgrdY+cGqiQK5WQW9dPOJi/yZazi/zPAfPo/anPwtCdVO8AJJcnThgYitEtSOv/LzKAgK1zdR9HM10fDUXawRABofEjeXIrDbJgqwNEPWjZWpnuGz1SDtQrm0a9Xk1l4TaoDgZkbKrewXkxzRN1QrlYanx2iArLgFz9KrqXc/ype5DAZAqFdB9mDqIuq0qK91TfHepxdQJaG2AuEsdXw5mh8vAzzGJ8rTP4vWHGrdqWkW1IJ0x07r0jy8pVQeguFqlugcmNWFU86tHTUBIKxI9nhgSJ4MfGukf95Tqyt/DTn2wxKYZxcS2vr9G/RYEgHAlb/C+dp5UYRe6BCP1jZiHpZp9rGlBwvfepAMDPORjFSrkh8diHlVIKvyslVS4qPQEBScJktpX6fcYgKgcXB36pwZIKJzR4e5OLrymLJllCfciVt+NeMuF2m63/6QER2lltS6PEbOqfmSnDQgpo1dzVcJ64PP6knUJsUrM0n2cpimlsYT/pv9Pq03BOoT/P/17BCtxYyIhbRKG8jS/IfIKiPul3pagjVg3dYlX+zBxVUCoGz/anR5RwXrvE3UFS3OTUD0GoWZn9rjU27uCtm4/I15Vzd1TtSCMD2BUl+5aKwPqP5cAJ0DXXvFUBYSzkgU3az0YMeIP1QBd3cWKgJBWsuBmrQcQr/GHCSCMQB1u1goYYbpXqvGHCSCcOARWZHxCqAmKJ+WdJrUd9CR59RiE6WbBigzMCMd6aG8QmgLCcbNgRcYlhBp7BIlo73+YAsJ0s4IVUfc1x1VDnz3jWg+rryNNXCyumxWsSBSI6y/ifKqiv1ZxJ0zLLQAzQBi76mmEXZz+50/d+msRJzCPwbmZR2EJCPn7kEwFuvkctz+1tWkxFw6r4Nw0BkmVcf3OGJw99fYpqY3q+a+Fs2Oeemf9KYSZBQkdlDrv1lpI/lXPfwsl4LC2Hid3zlq0ElYkthnulvXgEeqTPPmlxWqmOSACK1r5MGF1i6C0Vq9IeQyxvU0WaZoAIrDMdwZJj0fcWClpq3qYm8Mfmm2177GsuAkgMR4hf4N8ZdBNLs1spXC91BvBEL0irmXM2QwQYVdr6Xap3y7bi8JatVPjtl0PsWZTQIR91KUuvN8DqH0Vs5USeqonHWd0WukhnOJf2JfmMWZTQKKrJbGBeE/ep6NzwhE68eLM079HOVPqXue5f88Pw4tASJ7xdbV5reKOvEHNAYmQUM/x5Y798vyp09lTadUkK/z03ChAZbfohm69n8uVbtQNv8vO65I67K5qrDzAcZoMqlqt+LDg/ohiKz8U3UPyZHf3K3qBwxUgoTHSS4OWpKAuGQm02Ay81XI3FiQ1UniPRGbUUIqJBDxZjtRhd4BkgXs4DaU798BEk8arxO1FPy4BySD5JXgi+nhqNUaPXF8P5xaQNPaIS8ag4FIvWu6Ql0rVPSCwJqVD2dVzbl2qpRS7ACRBEtyteZ493QXYlVY6aGx3V8R1A0i+ynU8Hr8qpjc40KPhmtAdGK5XsUrUI+4GB4vyFYF8icSaPNMtGN0Dkg+30j2ATTRqgErTpaJD3J/YnYt1T4FgWe5JSPzvp3SbeNPuEFDkEhoOkOXwJ2DitczpokxsQNI4SVnRz+H1kS8VHcrFoox1fuNsej/dPHs2g/z/Ftr81zlgnmG7lEx59rt4i27et3Sj7p/4y1V/GjC8BaHAY/3OIv38VP0oqfXWspSuD4BISxTlDSUBADLUcKIz0hIAINISRXlDSQCADDWc6Iy0BACItERR3lASACBDDSc6Iy0BACItUZQ3lAQAyFDDic5ISwCASEsU5Q0lAQAy1HCiM9ISACDSEkV5Q0kAgAw1nOiMtAQAiLREUd5QEgAgQw0nOiMtAQAiLVGUN5QEAMhQw4nOSEsAgEhLFOUNJQEAMtRwojPSEgAg0hJFeUNJAIAMNZzojLQEAIi0RFHeUBL4H3WCcn1iLouaAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/assets/wechat.png
var wechat_namespaceObject = "data:image/png;base64,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";
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62086);
;// CONCATENATED MODULE: ./src/pages/linkme/index.tsx







/* harmony default export */ var linkme = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "application",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: linkmemodules.box,
      style: {
        marginTop: '30px'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: linkmemodules.title,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.FormattedMessage, {
          id: "chat"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: linkmemodules.icons,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            textAlign: "center",
            display: "flex",
            justifyContent: "center"
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: linkmemodules.iconBorder,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                className: linkmemodules.icon,
                src: email_namespaceObject,
                alt: "EMAIL"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: linkmemodules.iconTitle,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.FormattedMessage, {
                id: "email"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "hi@bobjoy.com"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: linkmemodules.iconBorder,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                className: linkmemodules.icon,
                src: instagram_namespaceObject,
                alt: "instagram"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: linkmemodules.iconTitle,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.FormattedMessage, {
                id: "instagram"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "@onmybob"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: linkmemodules.iconBorder,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                className: linkmemodules.icon,
                src: wechat_namespaceObject,
                alt: "Wechat"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: linkmemodules.iconTitle,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.FormattedMessage, {
                id: "wechat"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "bobjoy"
            })]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          clear: "both"
        }
      })]
    })
  });
});

/***/ })

}]);