import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./PokeModal.css"

export default function PokeModal({openPokeModal, handleClosePokeModal, pokePicker, pokeData}){

  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokePicker}.png`

  let pokeName = pokeData.name;
  let pokeType1 = pokeData.types[0].type.name;
  let pokeType2 = '';
  pokeData.types[1] ? pokeType2 = pokeData.types[1].type.name : pokeType2 = '';

  //function to capitalize first letter
  const toCapital = (word) =>{
    let cap1 = word.charAt(0).toUpperCase();
    let lowerRest = word.slice(1);
    const fullword = cap1 + lowerRest;
    return fullword;
  }

  //capitalize first letter for pokemon names and types
  pokeName = toCapital(pokeName)
  pokeType1 = toCapital(pokeType1)
  if(pokeData.types[1]){
    pokeType2 = toCapital(pokeType2)
  }

  //Nidoran check
  if(pokeData.id == 29){
    pokeName = "Nidoran♀";
  }
  else if(pokeData.id == 32){
    pokeName = "Nidoran♂"
  }

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
          <img src={imgURL} alt=""/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {pokeName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {pokeData.types[1] ? <>{pokeType1}, {pokeType2}</> : <>{pokeType1}</>}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}