#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import json
import webapp2
from google.appengine.api import channel
from google.appengine.ext import db

class Log(db.Model):
    timestamp = db.StringProperty(required=True)
    level = db.StringProperty(required=True)
    tag = db.StringProperty(required=True)
    message = db.StringProperty(required=True)
    
class MainHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write('Hello mind!')
    def post(self):
		body = self.request.body
		logs = json.loads(body)
		for l in logs:
			timestamp = j_obj['ts']
			level = j_obj['lvl']
			tag = j_obj['tag']
			message = j_obj['msg']
			log = Log(timestamp=timestamp, level=level, tag=tag, message=message)
			log.put()
			channel.send_message('kareem', body)

app = webapp2.WSGIApplication([
    ('/', MainHandler)
], debug=True)
