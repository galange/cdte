(function (_0x87e5x1) {
    _0x87e5x1['fn']['lightBox'] = function (_0x87e5x2) {
        _0x87e5x2 = jQuery['extend']({
            overlayBgColor: '#111111',
            overlayOpacity: 0.6,
            fixedNavigation: true,
            imageLoading: 'http://3.bp.blogspot.com/-BbfO2TakpeI/VBpAarxCJeI/AAAAAAAAGYc/K2aLB_DuOvI/s1600/loading.gif',
            imageBtnPrev: 'http://3.bp.blogspot.com/-JGND9bP-lUw/VBpAbJXYN1I/AAAAAAAAGYU/ToXBXPcWAXA/s1600/next-image2.png',
            imageBtnNext: 'http://3.bp.blogspot.com/-mRqZHLP6DmQ/VBpAah779LI/AAAAAAAAGYM/UJUWudqQ45E/s1600/next-image1.png',
            imageBtnClose: 'http://1.bp.blogspot.com/-5D4Z1sJCL8Y/VBpAaU61ckI/AAAAAAAAGYI/XzoT9CvqWI0/s1600/close-imagewhite.png',
            imageBlank: 'http://3.bp.blogspot.com/-1ju4NhcwXZY/VAIMANGR1uI/AAAAAAAABPc/iLik6Vso6pg/s1600/blank.gif',
            containerBorderSize: 10,
            containerResizeSpeed: 300,
            txtImage: 'Image',
            txtOf: 'of',
            keyToClose: 'c',
            keyToPrev: 'p',
            keyToNext: 'n',
            imageArray: [],
            activeImage: 0
        }, _0x87e5x2);
        var _0x87e5x3 = this;

        function _0x87e5x4() {
            _0x87e5x5(this, _0x87e5x3);
            return false;
        }
        function _0x87e5x5(_0x87e5x6, _0x87e5x7) {
            _0x87e5x1('embed, object, select')['css']({
                visibility: 'hidden'
            });
            _0x87e5x9();
            _0x87e5x2['imageArray']['length'] = 0;
            _0x87e5x2['activeImage'] = 0;
            if (_0x87e5x7['length'] == 1) {
                _0x87e5x2['imageArray']['push'](new Array(_0x87e5x6['getAttribute']('href'), _0x87e5x6['getAttribute']('title')))
            } else {
                for (var _0x87e5x8 = 0; _0x87e5x8 < _0x87e5x7['length']; _0x87e5x8++) {
                    _0x87e5x2['imageArray']['push'](new Array(_0x87e5x7[_0x87e5x8]['getAttribute']('href'), _0x87e5x7[_0x87e5x8]['getAttribute']('title')))
                }
            };
            while (_0x87e5x2['imageArray'][_0x87e5x2['activeImage']][0] != _0x87e5x6['getAttribute']('href')) {
                _0x87e5x2['activeImage']++
            };
            _0x87e5xb();
        }
        function _0x87e5x9() {
            _0x87e5x1('body')['append']('<div id="jquery-overlay"></div><div id="jquery-lightbox"><div id="lightbox-container-image-box"><div id="lightbox-container-image"><img id="lightbox-image"><div style="" id="lightbox-nav"><a href="#" id="lightbox-nav-btnPrev"></a><a href="#" id="lightbox-nav-btnNext"></a></div><div id="lightbox-loading"><a href="#" id="lightbox-loading-link"><img src="' + _0x87e5x2['imageLoading'] + '"></a></div></div></div><div id="lightbox-container-image-data-box"><div id="lightbox-container-image-data"><div id="lightbox-image-details"><span id="lightbox-image-details-caption"></span><span id="lightbox-image-details-currentNumber"></span></div><div id="lightbox-secNav"><a href="#" id="lightbox-secNav-btnClose"><img src="' + _0x87e5x2['imageBtnClose'] + '"></a></div></div></div></div>');
            var _0x87e5x8 = _0x87e5x19();
            _0x87e5x1('#jquery-overlay')['css']({
                backgroundColor: _0x87e5x2['overlayBgColor'],
                opacity: _0x87e5x2['overlayOpacity'],
                width: _0x87e5x8[0],
                height: _0x87e5x8[1]
            })['fadeIn']();
            var _0x87e5x7 = _0x87e5x1a();
            _0x87e5x1('#jquery-lightbox')['css']({
                top: _0x87e5x7[1] + (_0x87e5x8[3] / 10),
                left: _0x87e5x7[0]
            })['show']();
            _0x87e5x1('#jquery-overlay,#jquery-lightbox')['click'](function () {
                _0x87e5x18()
            });
            _0x87e5x1('#lightbox-loading-link,#lightbox-secNav-btnClose')['click'](function () {
                _0x87e5x18();
                return false;
            });
            _0x87e5x1(window)['resize'](function () {
                var _0x87e5x6 = _0x87e5x19();
                _0x87e5x1('#jquery-overlay')['css']({
                    width: _0x87e5x6[0],
                    height: _0x87e5x6[1]
                });
                var _0x87e5xa = _0x87e5x1a();
                _0x87e5x1('#jquery-lightbox')['css']({
                    top: _0x87e5xa[1] + (_0x87e5x6[3] / 10),
                    left: _0x87e5xa[0]
                });
            });
        }
        function _0x87e5xb() {
            _0x87e5x1('#lightbox-loading')['show']();
            if (_0x87e5x2['fixedNavigation']) {
                _0x87e5x1('#lightbox-image,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber')['hide']()
            } else {
                _0x87e5x1('#lightbox-image,#lightbox-nav,#lightbox-nav-btnPrev,#lightbox-nav-btnNext,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber')['hide']()
            };
            var _0x87e5x8 = new Image();
            _0x87e5x8['onload'] = function () {
                _0x87e5x1('#lightbox-image')['attr']('src', _0x87e5x2['imageArray'][_0x87e5x2['activeImage']][0]);
                _0x87e5xc(_0x87e5x8['width'], _0x87e5x8['height']);
                _0x87e5x8['onload'] = function () {};
            };
            _0x87e5x8['src'] = _0x87e5x2['imageArray'][_0x87e5x2['activeImage']][0];
        }
        function _0x87e5xc(_0x87e5xa, _0x87e5xd) {
            var _0x87e5x8 = _0x87e5x1('#lightbox-container-image-box')['width']();
            var _0x87e5xe = _0x87e5x1('#lightbox-container-image-box')['height']();
            var _0x87e5xf = (_0x87e5xa + (_0x87e5x2['containerBorderSize'] * 2));
            var _0x87e5x6 = (_0x87e5xd + (_0x87e5x2['containerBorderSize'] * 2));
            var _0x87e5x7 = _0x87e5x8 - _0x87e5xf;
            var _0x87e5x10 = _0x87e5xe - _0x87e5x6;
            _0x87e5x1('#lightbox-container-image-box')['animate']({
                width: _0x87e5xf,
                height: _0x87e5x6
            }, _0x87e5x2['containerResizeSpeed'], function () {
                _0x87e5x11()
            });
            if ((_0x87e5x7 == 0) && (_0x87e5x10 == 0)) {
                if (_0x87e5x1['browser']['msie']) {
                    _0x87e5x1b(250)
                } else {
                    _0x87e5x1b(100)
                }
            };
            _0x87e5x1('#lightbox-container-image-data-box')['css']({
                width: _0x87e5xa
            });
            _0x87e5x1('#lightbox-nav-btnPrev,#lightbox-nav-btnNext')['css']({
                height: _0x87e5xd + (_0x87e5x2['containerBorderSize'] * 2)
            });
        }
        function _0x87e5x11() {
            _0x87e5x1('#lightbox-loading')['hide']();
            _0x87e5x1('#lightbox-image')['fadeIn'](function () {
                _0x87e5x12();
                _0x87e5x13();
            });
            _0x87e5x17();
        }
        function _0x87e5x12() {
            _0x87e5x1('#lightbox-container-image-data-box')['slideDown']('fast');
            _0x87e5x1('#lightbox-image-details-caption')['hide']();
            if (_0x87e5x2['imageArray'][_0x87e5x2['activeImage']][1]) {
                _0x87e5x1('#lightbox-image-details-caption')['html'](_0x87e5x2['imageArray'][_0x87e5x2['activeImage']][1])['show']()
            };
            if (_0x87e5x2['imageArray']['length'] > 1) {
                _0x87e5x1('#lightbox-image-details-currentNumber')['html'](_0x87e5x2['txtImage'] + ' ' + (_0x87e5x2['activeImage'] + 1) + ' ' + _0x87e5x2['txtOf'] + ' ' + _0x87e5x2['imageArray']['length'])['show']()
            };
        }
        function _0x87e5x13() {
            _0x87e5x1('#lightbox-nav')['show']();
            _0x87e5x1('#lightbox-nav-btnPrev,#lightbox-nav-btnNext')['css']({
                background: 'transparent url(' + _0x87e5x2['imageBlank'] + ') no-repeat'
            });
            if (_0x87e5x2['activeImage'] != 0) {
                if (_0x87e5x2['fixedNavigation']) {
                    _0x87e5x1('#lightbox-nav-btnPrev')['css']({
                        background: 'url(' + _0x87e5x2['imageBtnPrev'] + ') left 15% no-repeat'
                    })['unbind']()['bind']('click', function () {
                        _0x87e5x2['activeImage'] = _0x87e5x2['activeImage'] - 1;
                        _0x87e5xb();
                        return false;
                    })
                } else {
                    _0x87e5x1('#lightbox-nav-btnPrev')['unbind']()['hover'](function () {
                        _0x87e5x1(this)['css']({
                            background: 'url(' + _0x87e5x2['imageBtnPrev'] + ') left 15% no-repeat'
                        })
                    }, function () {
                        _0x87e5x1(this)['css']({
                            background: 'transparent url(' + _0x87e5x2['imageBlank'] + ') no-repeat'
                        })
                    })['show']()['bind']('click', function () {
                        _0x87e5x2['activeImage'] = _0x87e5x2['activeImage'] - 1;
                        _0x87e5xb();
                        return false;
                    })
                }
            };
            if (_0x87e5x2['activeImage'] != (_0x87e5x2['imageArray']['length'] - 1)) {
                if (_0x87e5x2['fixedNavigation']) {
                    _0x87e5x1('#lightbox-nav-btnNext')['css']({
                        background: 'url(' + _0x87e5x2['imageBtnNext'] + ') right 15% no-repeat'
                    })['unbind']()['bind']('click', function () {
                        _0x87e5x2['activeImage'] = _0x87e5x2['activeImage'] + 1;
                        _0x87e5xb();
                        return false;
                    })
                } else {
                    _0x87e5x1('#lightbox-nav-btnNext')['unbind']()['hover'](function () {
                        _0x87e5x1(this)['css']({
                            background: 'url(' + _0x87e5x2['imageBtnNext'] + ') right 15% no-repeat'
                        })
                    }, function () {
                        _0x87e5x1(this)['css']({
                            background: 'transparent url(' + _0x87e5x2['imageBlank'] + ') no-repeat'
                        })
                    })['show']()['bind']('click', function () {
                        _0x87e5x2['activeImage'] = _0x87e5x2['activeImage'] + 1;
                        _0x87e5xb();
                        return false;
                    })
                }
            };
            _0x87e5x14();
        }
        function _0x87e5x14() {
            _0x87e5x1(document)['keydown'](function (_0x87e5x8) {
                _0x87e5x16(_0x87e5x8)
            })
        }
        function _0x87e5x15() {
            _0x87e5x1(document)['unbind']()
        }
        function _0x87e5x16(_0x87e5x8) {
            if (_0x87e5x8 == null) {
                keycode = event['keyCode'];
                escapeKey = 27;
            } else {
                keycode = _0x87e5x8['keyCode'];
                escapeKey = _0x87e5x8['DOM_VK_ESCAPE'];
            };
            key = String['fromCharCode'](keycode)['toLowerCase']();
            if ((key == _0x87e5x2['keyToClose']) || (key == 'x') || (keycode == escapeKey)) {
                _0x87e5x18()
            };
            if ((key == _0x87e5x2['keyToPrev']) || (keycode == 37)) {
                if (_0x87e5x2['activeImage'] != 0) {
                    _0x87e5x2['activeImage'] = _0x87e5x2['activeImage'] - 1;
                    _0x87e5xb();
                    _0x87e5x15();
                }
            };
            if ((key == _0x87e5x2['keyToNext']) || (keycode == 39)) {
                if (_0x87e5x2['activeImage'] != (_0x87e5x2['imageArray']['length'] - 1)) {
                    _0x87e5x2['activeImage'] = _0x87e5x2['activeImage'] + 1;
                    _0x87e5xb();
                    _0x87e5x15();
                }
            };
        }
        function _0x87e5x17() {
            if ((_0x87e5x2['imageArray']['length'] - 1) > _0x87e5x2['activeImage']) {
                objNext = new Image();
                objNext['src'] = _0x87e5x2['imageArray'][_0x87e5x2['activeImage'] + 1][0];
            };
            if (_0x87e5x2['activeImage'] > 0) {
                objPrev = new Image();
                objPrev['src'] = _0x87e5x2['imageArray'][_0x87e5x2['activeImage'] - 1][0];
            };
        }
        function _0x87e5x18() {
            _0x87e5x1('#jquery-lightbox')['remove']();
            _0x87e5x1('#jquery-overlay')['fadeOut'](function () {
                _0x87e5x1('#jquery-overlay')['remove']()
            });
            _0x87e5x1('embed, object, select')['css']({
                visibility: 'visible'
            });
        }
        function _0x87e5x19() {
            var _0x87e5x6, _0x87e5x8;
            if (window['innerHeight'] && window['scrollMaxY']) {
                _0x87e5x6 = window['innerWidth'] + window['scrollMaxX'];
                _0x87e5x8 = window['innerHeight'] + window['scrollMaxY'];
            } else {
                if (document['body']['scrollHeight'] > document['body']['offsetHeight']) {
                    _0x87e5x6 = document['body']['scrollWidth'];
                    _0x87e5x8 = document['body']['scrollHeight'];
                } else {
                    _0x87e5x6 = document['body']['offsetWidth'];
                    _0x87e5x8 = document['body']['offsetHeight'];
                }
            };
            var _0x87e5x7, _0x87e5xa;
            if (self['innerHeight']) {
                if (document['documentElement']['clientWidth']) {
                    _0x87e5x7 = document['documentElement']['clientWidth']
                } else {
                    _0x87e5x7 = self['innerWidth']
                };
                _0x87e5xa = self['innerHeight'];
            } else {
                if (document['documentElement'] && document['documentElement']['clientHeight']) {
                    _0x87e5x7 = document['documentElement']['clientWidth'];
                    _0x87e5xa = document['documentElement']['clientHeight'];
                } else {
                    if (document['body']) {
                        _0x87e5x7 = document['body']['clientWidth'];
                        _0x87e5xa = document['body']['clientHeight'];
                    }
                }
            };
            if (_0x87e5x8 < _0x87e5xa) {
                pageHeight = _0x87e5xa
            } else {
                pageHeight = _0x87e5x8
            };
            if (_0x87e5x6 < _0x87e5x7) {
                pageWidth = _0x87e5x6
            } else {
                pageWidth = _0x87e5x7
            };
            arrayPageSize = new Array(pageWidth, pageHeight, _0x87e5x7, _0x87e5xa);
            return arrayPageSize;
        }
        function _0x87e5x1a() {
            var _0x87e5x7, _0x87e5x8;
            if (self['pageYOffset']) {
                _0x87e5x8 = self['pageYOffset'];
                _0x87e5x7 = self['pageXOffset'];
            } else {
                if (document['documentElement'] && document['documentElement']['scrollTop']) {
                    _0x87e5x8 = document['documentElement']['scrollTop'];
                    _0x87e5x7 = document['documentElement']['scrollLeft'];
                } else {
                    if (document['body']) {
                        _0x87e5x8 = document['body']['scrollTop'];
                        _0x87e5x7 = document['body']['scrollLeft'];
                    }
                }
            };
            arrayPageScroll = new Array(_0x87e5x7, _0x87e5x8);
            return arrayPageScroll;
        }
        function _0x87e5x1b(_0x87e5x6) {
            var _0x87e5x7 = new Date();
            _0x87e5x8 = null;
            do {
                var _0x87e5x8 = new Date()
            } while (_0x87e5x8 - _0x87e5x7 < _0x87e5x6);;
        }
        return this['unbind']('click')['click'](_0x87e5x4);
    }
})(jQuery);
$(document)['ready'](function () {
    $('a[href$=jpg]:has(img)')['lightBox']();
    $('a[href$=jpeg]:has(img)')['lightBox']();
    $('a[href$=png]:has(img)')['lightBox']();
    $('a[href$=gif]:has(img)')['lightBox']();
    $('a[href$=bmp]:has(img)')['lightBox']();
});