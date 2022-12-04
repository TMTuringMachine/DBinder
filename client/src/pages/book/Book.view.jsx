import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import axios from '../../utils/axiosInstance';

const BookView = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [file,setFile] = useState(null);

    const getBook = async()=>{
        const data = {
            ipfsLink:"https://ipfs.moralis.io:2053/ipfs/Qmb7axp3nYTctZjpiLX1wkXdoaHXu7iNQAVZdQuJNoHXj5/uploads/sample.pdf"
        }
        const res = await axios.post('book/get',data)
        // setFile(res.data)
        setFile(res.data.buffer.data)
        console.log(res)
    }
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  return (
    <>
    <Document file={""} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={()=>getBook()}>Load</button>
      
    </>
  )
}

export default BookView