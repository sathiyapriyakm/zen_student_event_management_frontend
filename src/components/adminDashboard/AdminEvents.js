import { Typography, Container, Grid, Paper, Box, Stack } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { AppContext } from "../../contexts/AppState";
import {ColorButton} from "../login/Login"



export const AdminEvents = () => {
    const { getEvents,handleDelete,eventList } = useContext(AppContext)

  const navigate = useNavigate();

  useEffect(() => {
    getEvents()
  }, [])
  return (
    <>
      <Typography variant="h4" pb={2}
      sx={{textAlign:"center"}}>
        All Events
      </Typography>
      <Container maxWidth="md"
      >
        <Grid container spacing={2}>
          {eventList.map((event) => (
            <Grid key={event._id} item xs={12} sm={12} md={12}>
              <Paper elevation={3} sx={{ display: 'flex' }}>
                <Box
                  sx={{
                    width: "40%",
                    height: '100%',
                    display: { xs: 'none', md: 'flex' },
                  }}
                >
                  <Card
                    sx={{
                      maxWidth: '100%',
                      marginRight: '10px',
                      padding:"10px"
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit:"cover",
                        padding:"10px"
                      }}
                      image={event.eventposter}
                      alt="event poster"
                    />
                  </Card>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '80%',
                    margin: { xs: '10px 10px', md: '10px 10px' },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      width: '100%',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        textAlign: 'start',
                      }}
                    >
                      {event.eventname}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        textAlign: 'start',
                      }}
                    >
                      on {event.eventdate}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textAlign: 'start',
                      }}
                    >
                      Event Time: {event.eventstarttime}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textAlign: 'start',
                      }}
                    >
                      Event duration: {event.eventduration} hrs
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textAlign: 'start',
                      }}
                    >
                      About Event: {event.eventsummary}
                    </Typography>
                    {/* <Typography
                      variant="subtitle2"
                      sx={{
                        textAlign: 'start',
                      }}
                    >
                      Quantity: {book.Quantity}
                    </Typography> */}
                  </Box>
                  <Box>
                    <Stack
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        paddingBottom: '10px',
                      }}
                    >
                      <ColorButton
                        variant="contained"
                        // color="success"
                        sx={{ marginRight: '10px' }}
                        onClick={() => navigate(`/EditEvents/${event._id}`)}
                      >
                        Edit
                      </ColorButton>
                      <ColorButton
                        variant="contained"
                        onClick={() => handleDelete(event._id)}
                      >
                        Remove
                      </ColorButton>
                    </Stack>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
