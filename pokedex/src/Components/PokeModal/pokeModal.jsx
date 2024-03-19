import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./PokeModal.css"
import db from "../../pokemonDatabase"

export default function PokeModal({openPokeModal, handleClosePokeModal, pokePicker, pokeData}){

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

  
  return (
    <div style={{ margin: "5%"}}>
      
      <Modal
        open={openPokeModal}
        onClose={handleClosePokeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {db[pokePicker].pokeName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {db[pokePicker].pokeType2 ? <>{db[pokePicker].pokeType1}, {db[pokePicker].pokeType2}</> : <>{db[pokePicker].pokeType1}</>}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}