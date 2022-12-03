import {
  MenuItem,
  Modal,
  Select,
  Slide,
  TextField,
  Typography,
  InputLabel,
  FormControl,
  Box,
  Grid,
} from '@mui/material';
import StyledButton from '../CustomButton/StyledButton';
import { ModalContainer } from './ListBookModal.styles';
import { useDropzone } from 'react-dropzone';
import { useSnackbar } from 'notistack';
import axiosInstance from '../../utils/axiosInstance';

import { CustomTextField } from '../../globals/global.styles';
import pdfParser from '../../hooks/usePDFs';
import { useContext, useCallback, useState } from 'react';
import { BookContractContext } from '../../context/BookContractFunctions';

const ListBookModal = ({ state, toggleModal }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState({
    title: '',
    author: '',
    genre: '',
    Ether: 0,
    pageCount: 0,
    description: '',
  });
  const [imageToUpload, setImageToUpload] = useState(null);
  const { currAccount, addCID } = useContext(BookContractContext);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    console.log(data);
    //{title,description,DBCoins,Ether,author,genre,pageCount}
    let formData = new FormData();
    const numberPages = pdfParser(imageToUpload);
    formData.append('title', data.title);
    formData.append('author', '638b9a2e408f001b799778e1');
    formData.append('Ether', data.Ether);
    formData.append('DBCoins', data.Ether / 10000);
    formData.append('pageCount', numberPages);
    formData.append('genre', data.genre);
    formData.append('book', imageToUpload);
    formData.append('description', data.description);
    const res = await axiosInstance.post('/book/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const url = res?.data?.URL;
    await addCID(currAccount, url);
    toggleModal();
    enqueueSnackbar('Book added successfully!', { variant: 'success' });
  };

  const onDrop = useCallback((acceptedFiles) => {
    //console.log(acceptedFiles);
    setImageToUpload(acceptedFiles[0]);
  }, []);

  const { getRootProps, isDragActive, getInputProps } = useDropzone({ onDrop });

  return (
    <Modal open={state} onClose={toggleModal}>
      <Slide direction="up" in={state}>
        <ModalContainer>
          <Typography sx={{ fontSize: '1.2em', fontWeight: 600 }}>
            LIST YOUR BOOK
          </Typography>

          <Box
            sx={{
              border: isDragActive
                ? '2px dashed #109ece'
                : '2px dashed #a4a4a4',
              width: '100%',
              padding: '55px 20px',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            drag and drop the image here!
          </Box>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <CustomTextField
                name="title"
                label="Book Name"
                // variant="standard"
                fullWidth
                onChange={handleChange}
              />
            </Grid>

            <Grid item md={12}>
              <CustomTextField
                name="description"
                label="Description"
                multiline
                rows={3}
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6}>
              <CustomTextField
                name="genre"
                label="Genre"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6}>
              <CustomTextField
                name="Ether"
                label="Price in ETH"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <StyledButton onClick={handleSubmit} style={{ width: '100%' }}>
            ADD
          </StyledButton>
        </ModalContainer>
      </Slide>
    </Modal>
  );
};

export default ListBookModal;
