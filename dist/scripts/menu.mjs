import $ from 'jquery';

$(document).ready(function() {
    const height = window.innerHeight;
    let x = 0;
    let y = height / 2;
    let curveX = 10;
    let curveY = 0;
    let targetX = 0;

    const blob = $('#blob');
    const blobPath = $('#blob-path');
    const hamburger = $('.hamburger');
    const menuInner = $('.menu-inner');
    const menuParent = menuInner.parent();
    const h2 = $('h2');

    let menuExpanded = false;

    $(document).on('mousemove', function(e) {
        x = e.pageX;
        y = e.pageY;
    });

    hamburger.add(menuInner).on('mouseenter', function() {
        menuParent.addClass('expanded');
        menuExpanded = true;
    });

    menuInner.on('mouseleave', function() {
        menuExpanded = false;
        menuParent.removeClass('expanded');
    });

    const hoverZone = 150;
    const baseExpandAmount = 10;
    const maxExpandAmount = 15;

    function easeOutExpo(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
    }

    function calculateExpandAmount() {
        const distanceToMenu = Math.abs(x - hoverZone);
        const proximity = (hoverZone - distanceToMenu) / hoverZone;
        return baseExpandAmount + proximity * (maxExpandAmount - baseExpandAmount);
    }

    function svgCurve() {
        targetX = menuExpanded ? 0 : ((x > hoverZone) ? 0 : -(((60 + calculateExpandAmount()) / 100) * (x - hoverZone)));
        curveX = easeOutExpo(1, curveX, targetX - curveX, 100);
        curveY = easeOutExpo(1, curveY, y - curveY, 100);

        const anchorDistance = 200;
        const curviness = anchorDistance - 40;

        const newCurve2 = "M60," + height + "H0V0h60v" + (curveY - anchorDistance) + "c0," + curviness + "," + curveX + "," + curviness + "," + curveX + "," + anchorDistance + "S60," + curveY + ",60," + (curveY + (anchorDistance * 2)) + "V" + height + "z";

        blobPath.attr('d', newCurve2);
        blob.width(curveX + 60);
        hamburger.css('transform', 'translate(' + curveX + 'px, ' + curveY + 'px)');
        h2.css('transform', 'translateY(' + curveY + 'px)');

        requestAnimationFrame(svgCurve);
    }

    requestAnimationFrame(svgCurve);
});
