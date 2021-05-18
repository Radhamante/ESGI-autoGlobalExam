function $x(path){
 var xpath = document.evaluate(path, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
   var temp = [];
   for (var i = xpath.snapshotLength - 1; i >= 0; i--) {
     temp.push(xpath.snapshotItem(i));
   }
   return temp;
}
const f = async () => {
    $x("//label[contains(.,'A')]").forEach(e => {
        e.click()
    });
    $x("//label[contains(.,'B')]").forEach(e => {
        Math.random() > 0.3 ? e.click() : console.log("NO B")
    });
    $x("//label[contains(.,'C')]").forEach(e => {
        Math.random() > 0.3 ? e.click() : console.log("NO C")
    });
    $x("//label[contains(.,'D')]").forEach(e => {
        Math.random() > 0.3 ? e.click() : console.log("NO D")
    });
    $x("//span[contains(.,'Voir la correction')]").forEach(e => {
        e.click()
    });
    await setTimeout(()=>{},100);
    $x("//label[contains(@class,'bg-success')]").forEach(e => {
        Math.random() > 0.25 ? e.click() : console.log("NO CORREC")
    });
    $x("//span[contains(.,'Voir la correction')]").forEach(e => {
        e.click()
    });
    await setTimeout(()=>{},100);

    if($x("//button[contains(.,'Valider')]")[0]!=undefined){
        console.log("Valider")
        $x("//button[contains(.,'Valider')]")[0].click();
    }else if($x("//button[contains(.,'Suivant')]")[0]!=undefined){
        console.log("Suivant")
        while($x("//button[contains(.,'Suivant')]")[0]!=undefined){
            await setTimeout(()=>{},100);
            $x("//button[contains(.,'Suivant')]")[0].click()
        }
        await setTimeout(()=>{},100);
        $x("//button[contains(.,'Terminer')]")[0].click()
    }else if($x("//button[contains(.,'Passer')]")[0]!=undefined){
        console.log("Passer")
        while($x("//button[contains(.,'Passer')]")[0]!=undefined){
            await setTimeout(()=>{},100);
            $x("//button[contains(.,'Passer')]")[0].click()
        }
        await setTimeout(()=>{},100);
        $x("//button[contains(.,'Terminer')]")[0].click()
    }else if($x("//button[contains(.,'Terminer')]")[0]!=undefined){
        $x("//button[contains(.,'Terminer')]")[0].click()
    }
    if($x("//span[not(span[contains(@class,'shadow')]) and img[not(contains(@src,'writing.png') or contains(@src,'speaking'))]]")[0]!=undefined){
        $x("//span[not(span[contains(@class,'shadow')]) and img[not(contains(@src,'writing.png') or contains(@src,'speaking'))]]")[0].click()
    }else if($x("//a[contains(@href,'user-pla')]")[0]!=undefined){
        $x("//a[contains(@href,'user-pla')]")[0].click()
    }
}
const i = setInterval(await f,60000)
