// ============================================
// Shared Types for Review Notification Stores
// ============================================

export interface Website {
	name: string;
	url: string;
}

export type WidgetType = "aggregate" | "single-review" | "feed";

export type ThemeMode = "light" | "dark" | "pop" | "minimal" | "minimal-dark";

export type Position = "left" | "right";

// ============================================
// Widget Field Visibility Interfaces
// ============================================

export interface AggregateVisibility {
	showRatingNumber: boolean;
	showRatingStars: boolean;
	showTotalReviewCount: boolean;
	showPoweredBy: boolean;
}

export interface SingleReviewVisibility {
	showHeading: boolean;
	showDate: boolean;
	showAuthor: boolean;
	showAvatar: boolean;
	showRating: boolean;
	showPlatform: boolean;
	showReviewText: boolean;
	showPoweredBy: boolean;
}

export interface FeedVisibility {
	// Header section
	showHeading: boolean;
	showButton: boolean;
	// Review card elements
	showReviewStars: boolean;
	showReviewTitle: boolean;
	showReviewContent: boolean;
	showReviewAuthor: boolean;
	showReviewDate: boolean;
	// Footer
	showPoweredBy: boolean;
}

export type VisibilityElement = "aggregate" | "singleReview" | "feed";
