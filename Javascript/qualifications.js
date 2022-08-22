const qualifications = [4,8,5,10,11,8,4,5,9,12];

let exceedsExpectations = 0;
let pass = 0;
let failed = 0;
let counter = 0;

const qualificationsExceedsExpectations = (qualifications) => qualifications >= 10;

while (counter <= qualifications.length){
    if (qualificationsExceedsExpectations(qualifications[counter])){
        exceedsExpectations ++;
    }
    else if (qualificationsIsEnough(qualifications[counter])){
        pass ++;
    }
    else {
        failed ++;
    }
    counter ++;
}

console.log (exceedsExpectations);
console.log (pass);
console.log (failed);

function qualificationsIsEnough (qualifications){
    return qualifications >= 6;
}