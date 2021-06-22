// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

import (
	"github.com/podkrepi-bg/types/go-types/account"
)

type Campaign struct {
	ID        string           `json:"id"`
	Name      string           `json:"name"`
	Organizer *account.Account `json:"organizer"`
}

type CreateCampaign struct {
	Name        string `json:"name"`
	OrganizerID string `json:"organizerId"`
}
