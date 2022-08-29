import * as React from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import BookIcon from '@mui/icons-material/Book'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import { NavLink } from 'react-router-dom'

export default function NestedList() {
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor:
          'linear-gradient(124deg, rgba(131,58,180,1) 0%, rgba(165,50,138,1) 50%, rgba(170,49,132,1) 75%, rgba(192,44,105,1) 100%);',
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <ListItemButton>
          <ListItemIcon>
            <MenuBookIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="View Books" />
        </ListItemButton>
      </NavLink>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <LibraryBooksIcon sx={{ color: 'white' }} />
        </ListItemIcon>
        <ListItemText primary="Manage Books" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NavLink
            to="/booklist"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <FormatListNumberedIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Book List" />
            </ListItemButton>
          </NavLink>

          <NavLink
            to="/addbooks"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <BookIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Add Books" />
            </ListItemButton>
          </NavLink>

          <NavLink
            to="/issuedbooks"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <AssignmentIndIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Issued Books" />
            </ListItemButton>
          </NavLink>

          <NavLink
            to="/issue"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <BookmarkAddedIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Issue" />
            </ListItemButton>
          </NavLink>
        </List>
      </Collapse>
    </List>
  )
}
