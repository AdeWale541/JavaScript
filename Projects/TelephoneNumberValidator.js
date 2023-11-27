function telephoneCheck(str) {
        let telephoneNumberCheck= /^(1\s?)(?\()[5]\d{2}?\)[\s-]?\d{3}[\s-]?\d{4}|^(1\s?)?\([4]\d{2}\)[\s-]?\d{3}[\s-]?\d{4}|^[5]\d{2}[\s-]?\d{3}[\s-]?\d{4}/

    return telephoneNumberCheck.test(str);
  }
  function telephoneCheck2(str) {
    let telephoneNumberCheck = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return telephoneNumberCheck.test(str);
  }


console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck2("1(555)555-5555"))
  //telephoneCheck("555-555-5555");