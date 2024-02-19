class Student {
    constructor(_name,_mail, _birth, _nilai){
        this.name = _name;
        this.mail = _mail
        this.birth = _birth;
        this.nilai = _nilai;
        this.age = new Date().getFullYear() - new Date(_birth).getFullYear()
    }
}

function sorting (db5Student){
    const d = new Date().getFullYear()
    const e = new Date(db5Student[0].birth).getFullYear()
    let umurMax = d-e
    let umurMin = d-e
    let rataRataUmur = 0
    
    for(let i = 0; i< db5Student.length; i++){
        rataRataUmur += d - new Date(db5Student[i].birth).getFullYear()
        if(umurMax < d - new Date(db5Student[i].birth).getFullYear()){
            umurMax = db5Student[i]
        }
        if(umurMin > d - new Date(db5Student[i].birth).getFullYear()){
            umurMin = db5Student[i]
        }
    }
    let highValue = db5Student[0]
    // console.log(highValue);
    let minValue = db5Student[0]
    // console.log(minValue);
    // INI PELAJARAN PENTING
    let rataRata = 0 
    for(let i = 0; i < db5Student.length; i++){
        rataRata += db5Student[i].nilai
        console.log(rataRata);
        if(highValue.nilai < db5Student[i].nilai ){
            highValue = db5Student[i]
        }
        if(minValue.nilai > db5Student[i].nilai){
            minValue = db5Student[i]
        }
    }
    return {
        score: 
        {
            high : highValue,
            low : minValue,
            average: rataRata / db5Student.length,
        },
        age: 
        {
            high : umurMax,
            low : umurMin,
            average : rataRataUmur / db5Student.length
        }
    }
}



const db5Student = [
    new Student ("Edo","edo@mail.com", "1997-04-25", 15),
    new Student ("Andrew","and@mail.com", "1998-11-12", 35),
    new Student ("Zafran", "zaf@mail.com", "1992-02-01", 95),
    new Student ("Budi", "budi@mail.com", "1996-11-11", 55),
]
console.log(sorting(db5Student));