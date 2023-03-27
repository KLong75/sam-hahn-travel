// import from Material UI
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

// import images/logos
import Virtuoso from '../../assets/partner_logos/Virtuoso.png';
import luggageLogo from '../../assets/sam_logos/luggage.png';
import dominicanHotel from '../../assets/images/dominicanHotel.jpg';

const BookHotel = () => {
  return (
    <Grid container justifyContent='center' textAlign='center' >
      <Grid xs={12}>
        <h1>HOTELS</h1>
      </Grid>
      <Grid xs={12}> 
        <img src={luggageLogo} alt="globe logo" style={{width: '100px', height: '100px', marginTop: '-40px', marginBottom: '-40px'}} />
      </Grid>
      <Grid xs={12}>
        <h1>Book a hotel on your own and receive VIP perks!</h1>
      </Grid>
      <Grid xs={12} style={{margin: '20px'}}>
        <img src={Virtuoso} alt="" style={{width: '401px', height: 'auto', maxWidth: '100%'}} />
      </Grid>
      <Grid xs={12} textAlign='left'>
        <p style={{margin: '20px', fontSize: '18px'}} >My clients receive exclusive perks with their hotel bookings through my partnership with Virtuoso. If you already know where you want to go and do not require my hotel matchmaking service, you can now make your own hotel reservations using the Virtuoso Hotel Booking Tool.
        </p>
      </Grid>
      <Grid xs={12}>
        <h2 style={{margin: '-10px'}}>Common Virtuoso Perks Include:</h2>
      </Grid>
      <Grid xs={12} style={{fontSize: '18px', fontWeight: 'bold'}}>
        <ul>
          <li>Complimentary Daily Breakfast</li>
          <li>$100+ Hotel Credit</li>
          <li>Priority for a Room Upgrade</li>
          <li>Early Check-in & Check-Out, if available</li>
        </ul>
      </Grid>
      <Grid xs={12}>
        <Button 
          variant="contained" 
          href='https://www.virtuoso.com/advisor/samhahn52221/travel/' 
          target='_blank' 
          size='small' 
          style={{ backgroundColor: 'black', marginTop: '-20px', marginBottom: '30px'}}>
          Book Hotel Now
        </Button>
        <img src={dominicanHotel} alt="dominican hotel" style={{width: '100%', height: 'auto'}} />
      </Grid>
    </Grid>
  );
};

export default BookHotel;