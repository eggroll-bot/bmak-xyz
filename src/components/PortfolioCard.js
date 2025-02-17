import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

function PortfolioCard( props ) {
	return (
		<RouterLink style={ { textDecoration: "none" } } to={ props.path }>
			<Card variant="outlined">
				<CardActionArea disableTouchRipple>
					{
						props.cover ?
							<CardMedia
								component="img"
								src={ props.image }
								style={ { height: props.height || "100%", objectFit: "cover", width: props.width || "100%" } } /> :
							<CardMedia
								component="img"
								src={ props.image }
								style={ { height: props.height || "100%", width: props.width || "100%" } } />
					}

					<CardContent>
						<Typography align="center">
							{ props.text }
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</RouterLink>
	);
}

PortfolioCard.propTypes = {
	cover: PropTypes.bool,
	height: PropTypes.string,
	image: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	width: PropTypes.number
};

export default PortfolioCard;
