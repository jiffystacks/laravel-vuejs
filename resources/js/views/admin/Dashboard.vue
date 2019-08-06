<template>
	<v-container
    fill-height
    fluid
    grid-list-xl>
	   <v-layout wrap>
	      <v-flex
				sm6
				xs12
				md6
				lg3
			>
				<material-stats-card
				color="green"
				icon="fa-rupee-sign"
				title="Revenue"
				value="$34,245"
				sub-icon="fa-info-circle"
				sub-text="Last 24 Hours"
				/>
			</v-flex>

			<v-flex
				sm6
				xs12
				md6
				lg3
			>
				<material-stats-card
				color="orange"
				icon="fa-clipboard-list"
				title="Used Space"
				value="49/50"
				small-value="GB"
				sub-icon="fa-exclamation-triangle"
				sub-icon-color="error"
				sub-text="Get More Space..."
				sub-text-color="text-primary"
				/>
			</v-flex>

			<v-flex
				sm6
				xs12
				md6
				lg3
			>
				<material-stats-card
				color="red"
				icon="fa-shopping-bag"
				title="Fixed Issues"
				value="75"
				sub-icon="fa-tag"
				sub-text="Tracked from Github"
				/>
			</v-flex>
			
			<v-flex
				sm6
				xs12
				md6
				lg3
			>
				<material-stats-card
				color="info"
				icon="fab fa-twitter"
				title="Followers"
				value="+245"
				sub-icon="fa-hashtag"
				sub-text="Just Updated"
				/>
			</v-flex>

		</v-layout>
	</v-container>
</template>