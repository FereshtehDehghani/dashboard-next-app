import { SignedOut } from "@clerk/nextjs";
import { Login, Logout } from "@mui/icons-material";
import { Avatar, Button, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const LogOut = ({}) => {
	return (
		<div>
			<SignedOut>
                <Tooltip title="Open profile settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<UserButton />
										<Avatar sx={{ bgcolor: deepOrange[500] }} src=""/>
								
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: "45px" }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								<MenuItem>
                <Link
                  href={"/sign-in"}
                  style={{
                    color: theme.palette.text.primary,
                    textDecoration: "none",
                  }}
                >
                    <Login />
                  <Typography textAlign="center">Login</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
              <Link
                  href={"/sign-up"}
                  style={{
                    color: theme.palette.text.primary,
                    textDecoration: "none",
                  }}
                >
                    <Logout />
                  <Typography textAlign="center">Sign Up</Typography>
                </Link>

              </MenuItem>
							</Menu>
							 
			
			</SignedOut>
		</div>
	);
};

export default LogOut;
