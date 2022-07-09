<template>
	<article class="feed-item">
		<div v-if="attachments" class="attachments">
			<figure v-if="attachments.data[0].media.image">
				<img
					:src="attachments.data[0].media.image.src"
					:width="attachments.data[0].media.image.width"
					:height="attachments.data[0].media.image.height"
					loading="lazy" alt=""
				/>
			</figure>
		</div>

		<div v-if="attachments == null" class="attachments bg-image">
			<p v-if="message && attachments == null" v-html="message" />
			<img src="/assets/img/fb-background.jpg" width="750" height="520" loading="lazy" alt="" />
		</div>

		<div class="feed-content flow-v-md">
			<p class="feed-date">{{ formattedDate }}</p>

			<div v-if="attachments" class="flow-v-md">
				<p v-if="message" v-html="message" />
				<a class="btn btn-default" :href="attachments.data[0].target.url"
					>View post</a
				>
			</div>
		</div>
	</article>
</template>

<script>
	// import dayjs from "dayjs";

	export default {
		props: ['message', 'updated_time', 'attachments'],
		computed: {
			// formattedDate() {
			//   return dayjs(this.updated_time).format("MMMM D, YYYY");
			// },
			formattedDate() {
				const options = { year: 'numeric', month: 'long', day: 'numeric' };
				return new Date(this.updated_time).toLocaleDateString(
					undefined,
					options
				);
			},
		},
	};
</script>

<style scoped>
	article {
		background: var(--color-white);
		color: var(--color-dark);
		border-radius: var(--radius-rounded);
		overflow: hidden;
		width: 100%;
		margin: 0;

		display: inline-flex;
		flex-direction: column;
		align-self: flex-start;
	}

	article > *:not(.attachments) {
		padding-inline: var(--gap-md);
	}

	article figure img {
		margin-inline: auto;
		width: 100%;
	}
	.feed-content {
		padding-block: var(--gap-md);
	}
	.feed-date {
		font-weight: var(--txt-bold);
		text-transform: uppercase;
		letter-spacing: var(--tracking-loose);
	}

	.bg-image {
		display: grid;
		grid-template-columns: 1;
		grid-template-rows: 1;
		position: relative;
		z-index: 0;
	}
	.bg-image p {
		padding: var(--gap-md);
		color: var(--color-white);
		font-size: var(--s3);
		grid-column: 1;
		grid-row: 1;
		position: relative;
		z-index: 2;
		font-weight: var(--txt-bold);
		align-self: center;
	}
	.bg-image img {
		grid-column: 1;
		grid-row: 1;
		object-fit: cover;
		height: 100%;
		width: 100%;
		position: relative;
		z-index: 0;
	}
.btn {
  display: inline-flex;
  padding: 0.5em 1.5em;

  border: 1px solid transparent;
  border-radius: var(--radius-pill);
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--tracking-loose);
  text-align: center;
  align-items: center;
  justify-content: center;
}
	.btn-default {
		padding: 0;
		border: 0;
		border-radius: 0;
	}
</style>
