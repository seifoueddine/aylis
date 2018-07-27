namespace :point do


      desc "add points to users fo this month"
      task add: :environment do
        User.all.where(" activate = ? AND month_counter < ? ",true,4).each {|s|
          s.points += 50
          s.month_counter += 1
          s.save!
          puts "jai ajouté 50 points"
        }
      end


end