const pdfParser = (file) => {
  var reader = new FileReader();
  var count = 0;
  reader.readAsBinaryString(file);
  reader.onloadend = function () {
    count = reader.result.match(/\/Type[\s]*\/Page[^s]/g).length;
    console.log('Number of Pages:', count);
  };
  return count;
};

export default pdfParser;
