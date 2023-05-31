function chaine(ch){
    test=true
    ch=ch.toUpperCase()
    s=0
    for(i=0;i<ch.length;i++){
        if((ch.charAt(i)<"A")||(ch.charAt(i)>"Z")){
            s=s+1
        }
    }
    if(s!=0){
        test=false
    }
    return test
}

function verif(){
    if((document.getElementById("c1").checked==false) && (document.getElementById("c2").checked==false)){
        alert("doit etre saisir un genre ")
        return false
    }
    np=document.getElementById("np").value
    if((chaine(np)==false)||(np.length>30)||(np=="")){
        alert("Doit etre saisir le nom et le prenom")
        return false

    }
    tel=document.getElementById('tel').value
    ch='9527'
    x=tel.charAt(0)
    if((tel.length!=8) ||(ch.indexOf(x)==-1)){
        alert("Doit respecter la conidtion de la télephone")
        return false
    }
    adr=document.getElementById("Adresse").value;
    a=adr.indexOf("@")
    p=adr.lastIndexOf(".")
    ch1=adr.substr(0,a)
    ch2=adr.substr(a+1,p-(a+1))
    if((a==-1)||(adr.lastIndexOf('.com')==-1) && (adr.lastIndexOf(".fr")==-1)||(ch1=="")||(ch2=='')){
        alert("Doit respecter la condition de l'email")
    }
    adr1=document.getElementById("Adresse1").value 
    if(adr1!=adr){
        alert('Doit confimer l email')
        return false
    }
    adrz=document.getElementById("adr").value
    a=adrz.indexOf(" ")
    mot1=adrz.substr(0,a)
    mot2=adrz.substr(a+1)
    if((a==-1)||(mot1=="")||(mot2=="")){
        alert("Doit saisir l adresse")
        return false
    }


    if(document.querySelector("select").value=="Ville"){
        alert("Doit etre choisir un ville")
        return false
    }
    cdp=document.getElementById("cdp").value 
    if((isNaN(cdp)==true)||(cdp.length!=4)){
        alert("Saisir la code postal")
        return false
    }
    remarque=document.getElementById("Remarque").value 
    if((10>remarque.length)||(500<remarque.length)){
        alert("Doit respecter la condition de remarque")
        return false

    }
    x=500-remarque.length
    document.getElementById("dis").value=x
    ck=document.getElementById("ck1").checked
    if(ck==false){
        alert("Doit etre accepter les termes des conditions generales")
        return false
    }
    


























}
