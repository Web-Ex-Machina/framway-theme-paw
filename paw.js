let viewportPaddingTop = 0;
if (document.querySelector('.headerFW '))
    viewportPaddingTop += parseInt(window.getComputedStyle(document.querySelector('.headerFW ')).height );
// if (document.querySelector('.mod_breadcrumb '))
    // viewportPaddingTop += parseInt(window.getComputedStyle(document.querySelector('.mod_breadcrumb ')).height );
viewportPaddingTop += 'px';
document.documentElement.style.setProperty('--viewport-padding-top',viewportPaddingTop );

window.addEventListener("load", function(e) {
    setTimeout(function(){

        $('body').on('click', '.sliderFW__rail.multiple .sliderFW__item:not(.active)', function(e) {
            let slider = $(this).closest('.sliderFW').sliderFW('get');
            let iActive = slider.content.items.toArray().indexOf(slider.$el.find('.sliderFW__item.active').get(0));
            let iTarget = slider.content.items.toArray().indexOf(this);
            // console.log(slider,iActive,iTarget);
            if (iActive > iTarget)
                slider.goToPrev();
            else if (iActive < iTarget)
                slider.goToNext()
        });

        if (document.querySelector('.headerFW')) {
            var header = app.components_active.headerFW[0];
            header.$navPanel.prepend('<div class="panel__header"><div class="panel__close"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div></div>');
            header.$navPanel.find('.panel__close').on('click',function(){
              header.$toggler.trigger('click');
            });
        }

        // window.dispatchEvent(new Event('resize'));
    },10)
});


// HEADER
/**
 * switch the header between reduced and not-reduced states
 * @param  {Boolean} reduce 
 */
app.HeaderFW.prototype.navSwitcher = function(reduce = false){
    var header = this;
    if (reduce) {
        header.$el.addClass('is-reduce');
        if (header.$search) header.$search.appendTo(header.navPanelMenus.root.$el.find('.panel__actions'));
        if (header.$lang)   header.$lang.appendTo(header.navPanelMenus.root.$el.find('.panel__actions'));
        if (header.$topbar) header.$topbar.appendTo(header.navPanelMenus.root.$el.find('.panel__actions'));
    } else {
        header.$el.removeClass('is-reduce');
        if (header.$search) header.$nav.append(header.$search);
        if (header.$lang)   header.$nav.append(header.$lang);
        if (header.$topbar) header.$topbar.insertBefore(header.$el);
    }
};


app.HeaderFW.prototype.panelChecker = function(){
    var header = this;
    if (header.$navPanel.hasClass('active')) {
        if(header.$el.hasClass('is-pinned')){
            // header.$navPanel.css('height', viewport.height - header.$el.outerHeight() + 1);
        }
        else {
            // header.$navPanel.css('height', viewport.height - (header.$el.position().top + header.$el.outerHeight()) + 1);
        }
            // header.$navPanel.css('height', viewport.height - (header.$el.get(0).getBoundingClientRect().top + header.$el.outerHeight()));
            // header.$navPanel.css('height', viewport.height - (header.$el.get(0).getBoundingClientRect().top + header.$el.outerHeight()) + 1);
    }
};