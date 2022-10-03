package handler

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"golang.org/x/oauth2/google"
	"google.golang.org/api/calendar/v3"
	"google.golang.org/api/option"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	// b := "{'web':{'client_id': '123809003660-loa68504p4vkv03ce02g2fjrgg1s5543.apps.googleusercontent.com','project_id': 'river-daylight-337214','auth_uri':'https://accounts.google.com/o/oauth2/auth','token_uri':'https://oauth2.googleapis.com/token','auth_provider_x509_cert_url':'https://www.googleapis.com/oauth2/v1/certs','client_secret':'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','redirect_uris': ['https://sync-appointment.vercel.app/landing-zone']}}"
	
	s := map[string]string{"client_id": "123809003660-loa68504p4vkv03ce02g2fjrgg1s5543.apps.googleusercontent.com", "project_id": "river-daylight-337214", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_secret": "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"}
	a := map[string]map[string]string{"web": s}
	bolB, _ := json.Marshal(a)


	config, err := google.ConfigFromJSON(bolB, calendar.CalendarReadonlyScope)
	if err != nil {
			log.Fatalf("Unable to parse client secret file to config: %v", err)
	}


	client := getClient(config)

	calendarService, err := calendar.NewService(ctx, option.WithHTTPClient(client))
	if err != nil {
		fmt.Printf("Unable to read client secret file: %v", err)
	}

	fmt.Println(calendarService)

	// t := time.Now().Format(time.RFC3339)
	// events, err := calendarService.Events.List("primary").ShowDeleted(false).
	// SingleEvents(true).TimeMin(t).MaxResults(10).OrderBy("startTime").Do()
	// fmt.Println(events)
	// if err != nil {
	// 		log.Fatalf("Unable to retrieve next ten of the user's events: %v", err)
	// }
	// fmt.Println("Upcoming events:")
	// if len(events.Items) == 0 {
	// 		fmt.Println("No upcoming events found.")
	// } else {
	// 		for _, item := range events.Items {
	// 				date := item.Start.DateTime
	// 				if date == "" {
	// 						date = item.Start.Date
	// 				}
	// 				fmt.Printf("%v (%v)\n", item.Summary, date)
	// 		}
	// }
	
	// http.Redirect(w, r, "https://google.com", http.StatusTemporaryRedirect)
} 	