﻿using dataLayer.Objective_API.Model;
using Model;
using services.Objective_API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace businessLayer.Objective_API.Facades
{
    public class PlayerFacade : IPlayerFacade
    {
        private readonly LibraryContext context;

        public PlayerFacade(LibraryContext context)
        {
            this.context = context;
        }

        // Get full library

        public List<Player> GetPlayersLibrary()
        {
            try
            {
                return context.Players.ToList();
            }
            catch (Exception e)
            {
                Console.WriteLine("GET PlayersLibrary() - Status: Failed");
                throw e;
            }
        }

        // Get specific player
        public Player GetPlayer(Guid id)
        {
            try
            {
                var player = context.Players
                   .SingleOrDefault(d => d.Id == id);
                //SingleOrDefault is very important here!

                if (player != null)
                {
                    return player;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("GET Player() - Status: Failed");
                throw e;
            }
        }

        // Add specific player

        public void CreatePlayer(Player newPlayer)
        {
            try
            {
                context.Players.Add(newPlayer);
                context.SaveChanges();
            }
            catch (Exception e)
            {
                Console.WriteLine("POST CreatePlayer() - Status: Failed");
                throw e;
            }
        }

        // -- END -- 
    }
}