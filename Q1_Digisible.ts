function isDigisible(n: number): boolean {
  //Set variable
  const number = n;
  let convertNumber = number.toString();
  let listConvertNumber: string[] = [];

  for (let index = 0; index < convertNumber.length; index++) {
    const currentNumber = convertNumber[index];
    listConvertNumber.push(currentNumber);
  }

  // 1.Check all different numbers
  const CheckDifferentNumber = () => {
    console.log(listConvertNumber);
    let findDuplicatesIndex = (array: string[]) =>
      array.filter((item, index) => array.indexOf(item) !== index);

    let findDuplicatesNumber = findDuplicatesIndex(listConvertNumber);
    if (findDuplicatesNumber.length !== 0) {
      console.log("Error : Duplicate number " + findDuplicatesNumber);
      return false;
    }
    return true;
  };

  // 2.Check 0 in numbers
  const CheckZeroNumber = () => {
    for (const item of listConvertNumber) {
      if (item === "0") {
        console.log("Error : Zero number detected");
        return false;
      }
      return true;
    }
  };

  // 3. Check it is divisible by each of its digits
  const CheckDivisible = () => {
    for (let index = 0; index < listConvertNumber.length; index++) {
      const item = listConvertNumber[index];
      if (Number(item) % (index + 1) !== 0) {
        console.log(`Error : ${item} is not divisible by its digit`);
        return false;
      }
    }
    return true;
  };

  if (CheckDifferentNumber() && CheckZeroNumber() && CheckDivisible()) {
    console.log("This number can digisible : " + number);
  }

  return true;
}

// Example
isDigisible(12);
isDigisible(1115);
isDigisible(2015);
isDigisible(1526);
